import React from "react";
import "./App.css";
import { Amplify, Auth, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [state, setState] = React.useState({
    user1: "",
    user2: "",
  });
  const [putResult, setPutResult] = React.useState("");
  const [getResult, setGetResult] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState("");
  const [authState, setAuthState] = React.useState();

  const putStorage = async (e) => {
    try {
      const result = await Storage.put("test.txt", "this is a test file", {
        level: "protected",
        contentType: "text/plain",
      });
      setPutResult("Success: " + result);
    } catch (error) {
      setPutResult("Failed");
    }
  };

  const getStorage = async (e) => {
    try {
      const result = await Storage.get("test.txt", {
        level: "protected",
        identityId: state?.user1,
      });
      setGetResult("Success: " + result);
    } catch (error) {
      setGetResult("Failed");
    }
  };

  const setUserState = async (authState) => {
    const user = await Auth.currentUserCredentials();

    if (authState === "signedin" && state.user1) {
      setState((prev) => ({ ...prev, user2: user.identityId }));
      setCurrentUser("User 2");
    }

    if (authState === "signedin" && !state.user1) {
      setState((prev) => ({ ...prev, user1: user.identityId }));
      setCurrentUser("User 1");
    }
  };

  const getStorageItems = async () => {
    const result = await Storage.list();
    console.log(result);
  };

  React.useEffect(() => {
    getStorageItems();
    return onAuthUIStateChange(async (nextAuthState, authData) => {
      const user = await Auth.currentUserCredentials();
      setAuthState(nextAuthState);

      console.log(nextAuthState);
    });
  }, []);

  React.useEffect(() => {
    setUserState(authState);
  }, [authState]);

  return authState === AuthState.SignedIn ? (
    <div className="App">
      <AmplifySignOut />
      <div>
        <button onClick={putStorage}>
          Put to Storage with User1's identityId
        </button>
        Put Result: {putResult}
      </div>
      <div>
        <button onClick={getStorage}>
          Get from Storage With User1's identityId
        </button>
        Get Result: {getResult}
      </div>

      <p>Logged in as: {currentUser}</p>
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default AuthStateApp;

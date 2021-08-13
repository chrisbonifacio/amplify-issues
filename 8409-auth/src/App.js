import React from "react";
import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [state, setState] = React.useState({
    newPassword: "",
    oldPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await Auth.currentAuthenticatedUser();
    await Auth.changePassword(user, state.oldPassword, state.newPassword);
  };

  React.useEffect(() => {
    return onAuthUIStateChange(async (nextAuthState, authData) => {
      const creds = await Auth.currentCredentials();
      setAuthState(nextAuthState);
      setUser({ ...authData, ...creds });
    });
  }, []);

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <AmplifySignOut />

      <h1>Hello, {user.username}</h1>

      <form onSubmit={handleSubmit}>
        <h1>Change Password</h1>

        <input
          type="text"
          name="oldPassword"
          placeholder="old password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="newPassword"
          placeholder="new password"
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default AuthStateApp;

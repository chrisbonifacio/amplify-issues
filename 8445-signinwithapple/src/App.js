import React from "react";
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

Amplify.Logger.LOG_LEVEL = "DEBUG";

const App = () => {
  const initialState = { session: null, user: null, userInfo: null, error: "" };
  const [state, setState] = React.useState(initialState);

  const handleOpenHostedUI = async () => {
    try {
      await Auth.federatedSignIn();
    } catch (error) {
      setState((prev) => ({ ...prev, error }));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await Auth.federatedSignIn({
        provider: "Google",
      });
    } catch (error) {
      setState((prev) => ({ ...prev, error }));
    }
  };

  const handleAppleSignIn = async () => {
    try {
      await Auth.federatedSignIn({
        provider: "SignInWithApple",
      });
    } catch (error) {
      setState((prev) => ({ ...prev, error }));
    }
  };

  const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setState((prev) => ({ ...prev, user }));
      console.log({ user });
    } catch (error) {
      setState((prev) => ({ ...prev, error }));
      console.error({ error });
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await Auth.signOut();
      console.log({ res });
    } catch (error) {
      console.error(error);
    }
  };

  const authListener = ({ payload }) => {
    switch (payload.event) {
      case "signIn":
      case "cognitoHostedUI":
        getUser();
        break;
      default:
        console.log({ payload });
    }
  };

  const { user, error } = state;

  React.useEffect(() => {
    if (!user) getUser();
    Hub.listen("auth", authListener);

    return () => Hub.remove("auth", authListener);
  }, []);

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <button onClick={handleAppleSignIn}>Sign in with Apple</button>

      <button onClick={handleOpenHostedUI}>Open Hosted UI</button>

      <button onClick={handleSignOut}>
        Sign Out {user?.attributes?.email}
      </button>
      <div style={{ marginTop: "50px" }}>
        <h2>Current Authenticated User</h2>
        <pre>{JSON.stringify({ user: user, error }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;

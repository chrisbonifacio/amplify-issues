import React from "react";
import Amplify, { Auth } from "@aws-amplify/auth";
import awsconfig from "./aws-exports";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ConfirmSignUp from "./components/ConfirmSignUp";
import SetupMFA from "./components/SetupMFA";
import LinkTOTP from "./components/LinkTOTP";
Amplify.configure(awsconfig);

const App = () => {
  const initialState = {
    session: null,
    user: null,
    userInfo: null,
    setupMFA: false,
  };
  const [state, setState] = React.useState(initialState);

  const handleFederatedSignIn = async () => {
    await Auth.federatedSignIn({ provider: "Google" });
  };

  const getUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setState((prev) => ({ ...prev, user }));
  };

  const handleSignIn = async ({ username, password }) => {
    try {
      const user = await Auth.signIn({ username, password });
      console.log(user);
      if (
        user.challengeName === "SMS_MFA" ||
        user.challengeName === "SOFTWARE_TOKEN_MFA"
      ) {
        const loggedUser = await Auth.confirmSignIn(
          user,
          "test",
          user.challengeName
        );
        console.log(loggedUser);
      }
      setState((prev) => ({ ...prev, user }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async ({ username, password, email, phone_number }) => {
    try {
      const res = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number,
        },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmSignUp = async ({ username, confirmCode }) => {
    try {
      const res = await Auth.confirmSignUp(username, confirmCode);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await Auth.signOut({ global: true });
      setState((prev) => ({ ...prev, user: null }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleTOTPSetUp = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const res = await Auth.setupTOTP(user);
      console.log(res);

      setState((prev) => ({ ...prev, setupMFA: true }));
    } catch (error) {
      console.log(error);
    }
  };

  const linkTOTP = async (code) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const res = await Auth.verifyTotpToken(user, code);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const enableMFA = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const res = await Auth.setPreferredMFA(user, "TOTP");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getMFA = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const res = await Auth.getPreferredMFA(user);
      setState((prev) => ({ ...prev, MFAType: res }));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (!state.user) getUser();
  }, [state.user]);

  return (
    <div className="App">
      <button onClick={handleFederatedSignIn}>Open Google</button>
      <button onClick={getUser}>Get Current Session</button>
      <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
      <button onClick={handleSignOut}>Sign Out {state?.user?.username}</button>

      <SignUp handleSubmit={handleSignUp} />
      <SignIn handleSubmit={handleSignIn} />

      <ConfirmSignUp handleSubmit={handleConfirmSignUp} />

      <br />

      {state?.user && <SetupMFA handleClick={handleTOTPSetUp} />}
      {state?.setupMFA && <LinkTOTP handleSubmit={linkTOTP} />}

      <br />

      <button onClick={enableMFA}>Enable MFA</button>
      <button onClick={getMFA}>Get MFA Type</button>
    </div>
  );
};

export default App;

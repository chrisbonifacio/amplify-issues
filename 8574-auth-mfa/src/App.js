import React from "react";
import Amplify, { Auth } from "@aws-amplify/auth";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ConfirmSignUp from "./components/ConfirmSignUp";
import ConfirmSignIn from "./components/ConfirmSignIn";
import SetupMFA from "./components/SetupMFA";
import LinkTOTP from "./components/LinkTOTP";
import EditPhoneNumber from "./components/EditPhoneNumber";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
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
    try {
      const user = await Auth.currentAuthenticatedUser();
      setState((prev) => ({ ...prev, user }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async ({ username, password }) => {
    try {
      const user = await Auth.signIn({ username, password });
      console.log(user);
      if (
        user.challengeName === "SMS_MFA" ||
        user.challengeName === "SOFTWARE_TOKEN_MFA"
      ) {
        return setState((prev) => ({ ...prev, user }));
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

  const handleConfirmSignIn = async ({ confirmCode }) => {
    try {
      const user = await Auth.confirmSignIn(
        state?.user,
        confirmCode,
        state?.user.challengeName
      );
      setState((prev) => ({ ...prev, user }));
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await Auth.signOut();
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
      const res = await Auth.verifyToken(user, code);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const enableTOTPMFA = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const res = await Auth.setPreferredMFA(user, "TOTP");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const enableSMSMFA = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const res = await Auth.setPreferredMFA(user, "SMS");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const disableMFA = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const res = await Auth.setPreferredMFA(user, "NOMFA");
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

  const editPhoneNumber = async ({ phone_number }) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const res = await Auth.updateUserAttributes(user, { phone_number });
      console.log({ res });
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
      <ConfirmSignUp handleSubmit={handleConfirmSignUp} />

      <SignIn handleSubmit={handleSignIn} />
      <ConfirmSignIn handleSubmit={handleConfirmSignIn} />

      <br />

      {state?.user && <SetupMFA handleClick={handleTOTPSetUp} />}
      {state?.user && <EditPhoneNumber handleSubmit={editPhoneNumber} />}
      {state?.setupMFA && <LinkTOTP handleSubmit={linkTOTP} />}

      <br />

      <button onClick={enableTOTPMFA}>Enable TOTP MFA</button>
      <button onClick={enableSMSMFA}>Enable SMS MFA</button>
      <button onClick={disableMFA}>Disable MFA</button>
      <button onClick={getMFA}>Get MFA Type</button>
    </div>
  );
}

export default App;

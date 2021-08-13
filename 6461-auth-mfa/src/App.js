import React from "react";
import "./App.css";
import Amplify, { Auth } from "@aws-amplify/auth";
import awsconfig from "./aws-exports";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ConfirmSignUp from "./components/ConfirmSignUp";
import SetupMFA from "./components/SetupMFA";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [user, setUser] = React.useState();

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleTOTPSetUp = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const res = await Auth.setupTOTP(user);
    console.log(res);
  };

  return (
    <>
      <SignUp handleSubmit={handleSignUp} />
      <SignIn handleSubmit={handleSignIn} />

      <ConfirmSignUp handleSubmit={handleConfirmSignUp} />
      {user ? <SetupMFA handleClick={handleTOTPSetUp} /> : null}
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
};

export default AuthStateApp;

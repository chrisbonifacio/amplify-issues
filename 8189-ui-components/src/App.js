import React from "react";
import "./App.css";
import Amplify, { Hub } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

import awsconfig from "./aws-exports";
import Home from "./Home";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  React.useEffect(() => {
    return Hub.listen("auth", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <AmplifyAuthenticator usernameAlias="username">
      <AmplifySignOut />
      <Home />
      <AmplifySignIn slot="sign-in" hideSignUp={true}></AmplifySignIn>
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;

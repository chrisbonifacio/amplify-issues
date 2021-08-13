import React from "react";
import { Auth } from "@aws-amplify/auth";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

Auth.configure({
  Auth: {
    identityPoolId: "us-east-2:1e168a10-de6f-4c5e-90fe-f75b7c15dac0",
    region: "us-east-2",
    userPoolId: "us-east-2_2k1cpBbFo",
    userPoolWebClientId: "6ss170lggc5p6ss8qm7538i5t1",
    mandatorySignIn: true,
  },
});

const WelcomePage = () => (
  <AmplifyAuthenticator>
    <p>Welcome!</p>
  </AmplifyAuthenticator>
);

export default WelcomePage;

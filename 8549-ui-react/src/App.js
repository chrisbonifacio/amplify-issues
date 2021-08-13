import { Amplify } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
  AmplifyConfirmSignUp,
  AmplifyForgotPassword,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import CustomSignIn from "./components/CustomSignIn";
import CustomSignUp from "./components/CustomSignUp";
import CustomConfirmSignUp from "./components/CustomConfirmSignUp";
import CustomForgotPassword from "./components/CustomForgotPassword";

import awsconfig from "./aws-exports";
import "./App.css";

Amplify.configure(awsconfig);

function App() {
  const handleAuthStateChange = (state) => console.log(state);
  return (
    <AmplifyAuthenticator
      usernameAlias="email"
      initialAuthState="signin"
      handleAuthStateChange={handleAuthStateChange}
    >
      <h2>I'm In :D</h2>
      <AmplifySignOut />

      <div slot="sign-up" className="custom">
        <CustomSignUp />
        {/* <AmplifySignUp /> */}
      </div>

      <div slot="sign-in">
        <CustomSignIn />
        {/* <AmplifySignIn /> */}
      </div>

      <div slot="confirm-sign-up" className="custom">
        <CustomConfirmSignUp />
        {/* <AmplifyConfirmSignUp /> */}
      </div>

      <div slot="forgot-password" className="custom">
        <CustomForgotPassword />
        <AmplifyForgotPassword />
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

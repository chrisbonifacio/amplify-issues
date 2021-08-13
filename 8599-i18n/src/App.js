import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify, { Auth, I18n } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

I18n.setLanguage("it");

const signUp = () =>
  Auth.signUp(
    {
      username: "wrong username",
      password: "wrong password",
      attributes: {
        email: "christopher.bonifacio@gmail.com",
      },
    },
    {
      success: (data) => {
        console.log("signUp success:", data);
      },
      error: (err) => {
        console.error(
          "signup error should be localized in Italian, but it is not:",
          err
        );
      },
    }
  );

function App() {
  const [result, setResult] = React.useState("");
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button style={{ fontSize: "20px" }} onClick={signUp}>
            Sign Up
          </button>

          <pre>{JSON.stringify(result, null, 2)}</pre>
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import axios from "axios";

const userPool = new CognitoUserPool({
  UserPoolId: "us-east-1_8r58f61q3",
  ClientId: "6p6oq7rc95oufibolsdumf42mo",
});

const cognitoUser = new CognitoUser({
  Username: "christopher.bonifacio@gmail.com",
  Pool: userPool,
});

const authData = new AuthenticationDetails({
  Username: "christopher.bonifacio@gmail.com",
  Password: "Hello123!",
});

function App() {
  const [session, setSession] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const getOauth2Token = async () => {
    const res = await axios.post(
      "https://acij.auth.us-east-1.amazoncognito.com/oauth2/token",
      {
        grant_type: "refresh_token",
        client_id: userPool.getClientId(),
        refresh_token: session.getRefreshToken().getToken(),
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log({ res });
  };

  React.useEffect(() => {
    if (!session)
      cognitoUser.authenticateUser(authData, {
        onSuccess: function (result) {
          console.log({ result });
          setSession(result);
        },
        onFailure: function (error) {
          console.log({ error });
        },
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getOauth2Token}>get token</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

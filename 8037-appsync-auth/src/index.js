import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";

import Amplify from "aws-amplify";
import config from "./aws-exports";
import AWSAppSyncClient from "aws-appsync";
import { ApolloProvider } from "@apollo/react-hooks";
import { Auth } from "aws-amplify";

const { host } = window.location;

let errorAuthentication = null;

if (config.oauth.redirectSignIn.includes(",")) {
  const filterHost = (url) => new URL(url).host === host;
  config.oauth.redirectSignIn = config.oauth.redirectSignIn
    .split(",")
    .filter(filterHost)
    .shift();
  config.oauth.redirectSignOut = config.oauth.redirectSignOut
    .split(",")
    .filter(filterHost)
    .shift();
}

Amplify.configure(config);

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    apiKey: config.aws_appsync_apiKey,
    jwtToken: async () => {
      try {
        const session = await Auth.currentSession();
        return session.getIdToken().getJwtToken();
      } catch (err) {
        errorAuthentication = "Failed to authenticate, please sign in again";
        return "";
      }
    },
  },
  disableOffline: true,
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App errorAuthentication={errorAuthentication} />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

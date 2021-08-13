import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import "../styles/globals.css";
import awsconfig from "../src/aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyAuthenticator>
      <AmplifySignOut />
      <Component {...pageProps} />
    </AmplifyAuthenticator>
  );
}

export default MyApp;

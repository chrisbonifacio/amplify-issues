import { Amplify } from "aws-amplify";
import awsConfig from "../src/aws-exports";
import "../styles/globals.css";

Amplify.configure(awsConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

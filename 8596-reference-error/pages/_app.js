import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import config from "../media/aws-exports";

Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

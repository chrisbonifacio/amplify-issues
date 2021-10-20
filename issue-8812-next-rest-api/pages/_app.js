// pages/_app.js
import { withAuthenticator } from "@aws-amplify/ui-react";

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(CustomApp);

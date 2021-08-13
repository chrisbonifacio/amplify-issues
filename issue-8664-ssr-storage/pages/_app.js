import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Amplify, Hub, withSSRContext, Logger } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });
Amplify.Logger.LOG_LEVEL = "DEBUG";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listener = ({ payload }) => {
      const { event, data } = payload;
      console.log(event);

      switch (event) {
        case "signIn":
          setUser(data);
          break;
        default:
          break;
      }
    };

    Hub.listen("auth", listener);

    return () => Hub.remove("auth");
  }, []);

  return (
    <AmplifyAuthenticator>
      <AmplifySignOut />
      <Component {...pageProps} user={pageProps.user || user} />
    </AmplifyAuthenticator>
  );
}

// MyApp.getInitialProps = async ({ ctx }) => {
//   const { Auth } = withSSRContext(ctx);

//   let user;

//   try {
//     user = await Auth.currentAuthenticatedUser();
//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     pageProps: {
//       user,
//     },
//   };
// };

export default MyApp;

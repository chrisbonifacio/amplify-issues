import React, { useState, useEffect } from "react";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import { Amplify, Hub, withSSRContext } from "aws-amplify";
import { config } from "../amplify.config";

Amplify.configure({ ...config, ssr: true });

const Aura = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          // dispatch to redux here?
          setUser(data);
      }
    });
  }, []);

  return (
    <AmplifyAuthenticator>
      <AmplifySignIn hideSignUp usernameAlias="email" slot="sign-in" />
      <AmplifySignOut />
      <Component
        {...pageProps}
        user={pageProps.user || { ...user, fromClient: true }}
      />
    </AmplifyAuthenticator>
  );
};

Aura.getInitialProps = async ({ Component, ctx }) => {
  const auth = withSSRContext(ctx).Auth;

  try {
    const user = await auth.currentAuthenticatedUser();
    console.log({ user });

    return { pageProps: { user: { ...user, fromServer: true } } };
  } catch (error) {
    console.error({ error });

    return {
      pageProps: {
        error,
      },
    };
  }
};

export default Aura;

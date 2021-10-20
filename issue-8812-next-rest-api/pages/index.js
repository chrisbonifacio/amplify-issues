// pages/index.js
import { ConsoleLogger } from "@aws-amplify/core";
import { Amplify, Auth, withSSRContext } from "aws-amplify";

import config from "../src/aws-exports";

Amplify.configure({
  ...config,
  API: {
    endpoints: [
      {
        name: "api",
        endpoint: "https://cty5s6kclh.execute-api.us-east-1.amazonaws.com/dev",
        region: "us-east-1",
      },
    ],
  },
  ssr: true,
});

export default function Index({ pets, error }) {
  return pets || error;
}

export async function getServerSideProps(context) {
  const { Auth, API } = withSSRContext(context);

  try {
    const user = await Auth.currentAuthenticatedUser();

    // Fails here, and goes straight to the catch handler
    const pets = await API.get("api", `/pets`, {
      headers: {
        custom_header: `Bearer ${user.signInUserSession.idToken.jwtToken}`,
      },
    });

    return {
      props: {
        pets: JSON.stringify(pets),
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: error.message || error,
      },
    };
  }
}

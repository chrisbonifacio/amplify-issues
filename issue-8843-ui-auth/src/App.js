// Put your code below this line.
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";

import { settings } from "config/settings";
import { useAppContext } from "hooks";

export const App = () => {
  const { userSignedIn } = useAppContext();

  return (
    <>
      <Helmet>
        <title>Rabbit</title>
      </Helmet>
      {userSignedIn ? (
        <Redirect to="/dashboard/employees" />
      ) : (
        <AmplifyAuthenticator
          federated={{
            amazonClientId: settings.cognito.CLIENT_ID,
          }}
        />
      )}
    </>
  );
};

export default App;

import React from "react";
import Amplify, { Auth } from "@aws-amplify/auth";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const App = () => {
  const initialState = { session: null, user: null, userInfo: null };
  const [state, setState] = React.useState(initialState);

  const handleSignIn = async () => {
    await Auth.federatedSignIn({ provider: "GithubLogin" });
  };

  const getUser = async () => {
    const { attributes } = await Auth.currentAuthenticatedUser();
    console.log(attributes);
  };

  React.useEffect(() => {
    if (!state.user) getUser();
  }, [state.user]);

  const { user } = state;

  return (
    <div className="App">
      <button onClick={handleSignIn}>Sign in with Github</button>
      <button onClick={getUser}>Get Current Session</button>
      <button onClick={() => Auth.signOut()}>
        Sign Out {state?.user?.attributes?.sub}
      </button>
    </div>
  );
};

export default App;

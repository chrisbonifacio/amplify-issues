import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify, Auth, Hub } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const res = await Auth.currentAuthenticatedUser();
      setUser(res);
      console.log({ res });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const listener = ({ payload }) => {
      const { event, data } = payload;
      if (event === "signIn") {
        setUser(data);
      }
      if (event === "signOut") {
        setUser(null);
      }
    };
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <AmplifyAuthenticator>
      <header className="App-header">
        <AmplifySignOut />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Well, this still worked... awkward.</h1>
        <h2>Hello, {user?.attributes?.email}</h2>
      </header>
    </AmplifyAuthenticator>
  );
}

export default App;

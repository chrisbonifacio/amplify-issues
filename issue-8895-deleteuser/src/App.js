import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <AmplifyAuthenticator>
      <AmplifySignOut />
      <div className="App">
        <header className="App-header">
          <h2>Welcome, {user.attributes.email}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

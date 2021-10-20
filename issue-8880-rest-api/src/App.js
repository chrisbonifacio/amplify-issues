import logo from "./logo.svg";
import "./App.css";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  const testAPI = async () => {
    try {
      const res = await API.put("test", "/test");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <header className="App-header">
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
          <button onClick={testAPI}>Test API</button>
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

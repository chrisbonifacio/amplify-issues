import logo from "./logo.svg";
import "./App.css";
import { AmplifyAuthenticator, AmplifyToast } from "@aws-amplify/ui-react";

function App() {
  return (
    <AmplifyAuthenticator>
      <AmplifyToast />
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
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

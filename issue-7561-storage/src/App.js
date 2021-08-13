import logo from "./logo.svg";
import "./App.css";
import { Amplify, Storage } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  async function onChange(e) {
    const file = e.target.files[0];
    console.log({ file });
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional,
        level: "protected",
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  return (
    <AmplifyAuthenticator>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input type="file" onChange={onChange} />
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

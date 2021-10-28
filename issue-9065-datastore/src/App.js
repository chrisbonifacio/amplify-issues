import { useEffect } from "react";
import { Amplify, DataStore, Hub } from "aws-amplify";
import { Athlete } from "./models";
import awsConfig from "./aws-exports";
import logo from "./logo.svg";
import "./App.css";

Amplify.configure(awsConfig);

function App() {
  const saveAthlete = async () => {
    await DataStore.save(
      new Athlete({
        phoneNumber: "6781982162",
      })
    );
  };

  useEffect(() => {
    const listener = (capsule) => {
      const { payload } = capsule;
      const { event, data } = payload;

      console.log({ event, data });
    };

    Hub.listen("datastore", listener);

    return () => Hub.remove("datastore", listener);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={saveAthlete}>Create Athlete</button>
      </header>
    </div>
  );
}

export default App;

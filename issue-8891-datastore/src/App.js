import logo from "./logo.svg";
import "./App.css";
import { API, DataStore } from "aws-amplify";
import { Todo } from "./models/index";

function App() {
  const testAPICall = async () => {
    await API.get("mybackend", "/api/v1/somecall", {});
  };

  const saveTodo = async () => {
    try {
      const saved = await DataStore.save(new Todo({}));

      if (!saved.name) {
        const toDelete = await DataStore.query(Todo, saved.id);
        const deleted = await DataStore.delete(toDelete);

        console.log({ deleted });
      }
    } catch (error) {
      console.log("something went wrong");
    }
  };

  return (
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
        <button onClick={saveTodo}>Test Save Todo</button>
        <button onClick={testAPICall}>Test API Call</button>
      </header>
    </div>
  );
}

export default App;

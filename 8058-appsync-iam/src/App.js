import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import API, { graphqlOperation } from "@aws-amplify/api";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createTodo } from "./graphql/mutations";

function App() {
  const [todo, setTodo] = useState({
    name: "",
    description: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setTodo((prev) => ({ ...prev, [name]: value }));
    console.log(todo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.graphql(graphqlOperation(createTodo, todo));
  };

  return (
    <AmplifyAuthenticator>
      <AmplifySignOut />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={handleSubmit}>
            <h1>Create Todo</h1>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={todo.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="description"
              value={todo.description}
              onChange={handleChange}
            />
            <button type="submit">Create Todo</button>
          </form>
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;

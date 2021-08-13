import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify, DataStore } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Todo } from "./models";

Amplify.configure(awsconfig);

function App() {
  const [todos, setTodos] = React.useState([]);
  const [editID, setEditID] = React.useState(null);

  async function getTodos() {
    try {
      const result = await DataStore.query(Todo);
      setTodos(result);
      console.log({ result });
    } catch (error) {
      console.error(error);
    }
  }

  async function createTodo(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };

    try {
      const result = await DataStore.save(new Todo(data));
      console.log({ result });
      await getTodos();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateTodo(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };

    try {
      const original = await DataStore.query(Todo, editID);
      console.log({ original });
      const result = await DataStore.save(
        Todo.copyOf(original, (updated) => {
          updated.name = data.name;
          updated.description = data.description;
        })
      );
      console.log({ result });
      await getTodos();
      setEditID(null);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={createTodo}>
          <fieldset>
            <legend>Create Todo</legend>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="name" />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" placeholder="description" />
            <input type="submit" value="Submit" />
          </fieldset>
        </form>

        <div>
          <h2>Todos</h2>
          {!todos.length ? (
            <p>no todos</p>
          ) : (
            todos.map((todo) => {
              return editID !== todo.id ? (
                <div style={{ border: "1px solid white", padding: "2rem" }}>
                  <p>Name: {todo.name}</p>
                  <p>Description: {todo.description}</p>
                  <button onClick={() => setEditID(todo.id)}>Edit</button>
                </div>
              ) : (
                <form onSubmit={updateTodo}>
                  <fieldset>
                    <legend>Edit Todo</legend>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      defaultValue={todo.name}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      name="description"
                      placeholder="description"
                      defaultValue={todo.description}
                    />
                    <input type="submit" value="Save" />
                  </fieldset>
                </form>
              );
            })
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

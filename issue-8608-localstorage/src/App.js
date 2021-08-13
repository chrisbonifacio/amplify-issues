import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify, withSSRContext } from "aws-amplify";

function App() {
  React.useEffect(() => {
    document.cookie = "foo=bar";
    window.localStorage.setItem("foo", "biz");
    debugger; // cookie.foo === 'bar' localStorage.foo = 'biz'
    const SSR = withSSRContext();
    debugger; // cookie.foo === 'bar' localStorage.foo = 'bar'
  }, []);
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
      </header>
    </div>
  );
}

export default App;

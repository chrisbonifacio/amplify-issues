import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'

Amplify.configure(config)

function App() {
  return (
    <AmplifyAuthenticator>
      <AmplifySignOut/>
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
    </AmplifyAuthenticator>
  );
}

export default App;

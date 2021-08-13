import { CognitoUser } from "@aws-amplify/auth";
import config from "./aws-exports";
import { Auth } from "aws-amplify";
import Amplify from "aws-amplify";

Amplify.configure(config);

console.log(CognitoUser);

export class AuthService {
  public async login(userName: string, password: string) {
    const user = (await Auth.signIn(userName, password)) as CognitoUser;
    const realUserName = user.getUsername();
    return {
      cognitoUser: user,
      userName: realUserName,
    };
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

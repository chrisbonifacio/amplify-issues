import { FC } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";

import "./App.css";

const App: FC = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);

export default withAuthenticator(App);

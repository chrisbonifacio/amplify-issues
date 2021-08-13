import { useState } from "react";
import { Amplify, Auth, I18n } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifyForgotPassword,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import "./App.css";

import { Translations } from "@aws-amplify/ui-components";

I18n.putVocabulariesForLanguage("en-US", {
  [Translations.EMPTY_USERNAME]: "Your email cannot be empty",
});

Amplify.Logger.LOG_LEVEL = "DEBUG";
Auth.configure({
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:b85b2ad9-9a67-47f4-abd2-c31dd28bd071",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_nhHStViQG",
  aws_user_pools_web_client_id: "4o49mct2qvvm7dba42oipdt6eg",
});

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => setVisible((prev) => !prev)}>
          Toggle Visibility
        </button>
      </div>
      {visible && (
        <div>
          <AmplifyAuthenticator>
            <AmplifySignOut />
            <AmplifyForgotPassword slot="forgot-password" headerText="Email" />
            <h1>Welcome!</h1>
          </AmplifyAuthenticator>
        </div>
      )}
    </>
  );
}

export default App;

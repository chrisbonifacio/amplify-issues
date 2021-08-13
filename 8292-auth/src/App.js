import React, { useState } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";

const App = () => {
  const [state, setState] = useState({
    username: "",
    code: "",
    new_password: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    Auth.forgotPassword(state?.username)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    Auth.forgotPasswordSubmit(state?.username, state?.code, state?.new_password)
      .then(() => console.log("password reset"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AmplifySignOut />
      <form onSubmit={handleForgotPassword}>
        <label>
          Forgot Password
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </label>

        <button>Submit</button>
      </form>

      <form onSubmit={handleResetPassword}>
        <label>
          Reset Password
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </label>
        <label>
          Code
          <input
            type="text"
            name="code"
            placeholder="code"
            onChange={handleChange}
          />
        </label>

        <label>
          New Password
          <input
            type="password"
            name="new_password"
            placeholder="new password"
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

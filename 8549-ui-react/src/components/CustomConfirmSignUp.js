import React from "react";
import { Auth } from "aws-amplify";

const CustomConfirmSignup = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("email");
    const code = formData.get("code");

    const confirmSignUp = await Auth.confirmSignUp(username, code);

    console.log({ confirmSignUp });
  };
  return (
    <div className="ui centered grid">
      <div className="column">
        <h1 className="ui header">Sign up</h1>
      </div>
      <div className="column">
        <form onSubmit={handleSignUp}>
          <div className="ui form">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                autoFocus
              />
            </div>
            <div className="field">
              <label>Code</label>
              <input type="code" name="code" placeholder="code" required />
            </div>
            <div className="field">
              <button type="submit" className="ui button">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomConfirmSignup;

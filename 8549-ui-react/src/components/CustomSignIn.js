import React from "react";
import { Auth } from "aws-amplify";

const CustomSignIn = () => {
  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("email");
    const password = formData.get("password");

    const signIn = await Auth.signIn({ username, password });

    console.log({ signIn });
  };
  return (
    <div className="ui centered grid">
      <div className="column">
        <h1 className="ui header">Sign In</h1>
      </div>
      <div className="column">
        <form onSubmit={handleSignIn}>
          <div className="ui form">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                autoFocus
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="field">
              <button type="submit" className="ui button">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomSignIn;

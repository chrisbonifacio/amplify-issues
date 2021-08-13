import React from "react";
import { Auth } from "aws-amplify";

const CustomSignUp = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("email");
    const password = formData.get("password");
    const phone_number = formData.get("phone");
    const signUp = await Auth.signUp({
      username,
      password,
      attributes: {
        phone_number,
      },
    });
    console.log({ signUp });
  };
  return (
    <div className="ui centered grid">
      <div className="column">
        <h1 className="ui header">Sign Up</h1>
      </div>
      <div className="column">
        <form onSubmit={handleSignUp}>
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
              <label>Phone</label>
              <input
                type="phone"
                name="phone"
                placeholder="phone"
                required
                autoFocus
                autoComplete="phone"
              />
            </div>
            <div className="field">
              <button type="submit" className="ui button">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomSignUp;

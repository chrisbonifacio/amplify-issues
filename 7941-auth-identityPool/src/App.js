import React from "react";
import "./App.css";
import { Auth } from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [state, setState] = React.useState({
    username: "",
    password: "",
    email: "",
    phone_number: "",
    confirmCode: "",
  });

  const { username, password, email, phone_number, confirmCode } = state;

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number,
        },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = async (e) => {
    e.preventDefault();

    try {
      const res = await Auth.confirmSignUp(username, confirmCode);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form style={{ marginBottom: "15px" }} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone
          <input
            type="phone"
            name="phone_number"
            value={phone_number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>

      <form onSubmit={handleConfirm}>
        Confirmation Code
        <input
          type="text"
          name="confirmCode"
          value={confirmCode}
          onChange={handleChange}
        />
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default AuthStateApp;

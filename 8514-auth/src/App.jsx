import React from "react";
import "./App.css";
import { Auth } from "@aws-amplify/auth";
// import "regenerator-runtime";

const App = () => {
  const [user, setUser] = React.useState();
  const [mfaType, setMfaType] = React.useState("OFF");
  const [state, setState] = React.useState({
    username: "",
    password: "",
    email: "",
    phone_number: "",
    confirmCode: "",
    mfaCode: "",
  });

  const { username, password, email, phone_number, confirmCode, mfaCode } =
    state;

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const handleSignUp = async (e) => {
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

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log({ username, password });
    try {
      const res = await Auth.signIn({ username, password });
      console.log(res);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const res = await Auth.signOut();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMFA = async (e) => {
    e.preventDefault();
    try {
      const res = await Auth.confirmSignIn(user, mfaCode, "SMS_MFA");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMFA = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      if (mfaType === "OFF") {
        await Auth.setPreferredMFA(user, "SMS");
        setMfaType("SMS");
      } else {
        await Auth.setPreferredMFA(user, "OFF");
        setMfaType("OFF");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleSignOut}>
        Sign Out {user?.attributes?.email}
      </button>
      <form style={{ marginBottom: "15px" }} onSubmit={handleSignUp}>
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

      <form onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <label>
          Username
          <input type="text" name="username" onChange={handleChange} />
        </label>

        <label>
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <button>Sign In</button>
      </form>

      <form onSubmit={handleMFA}>
        <label>
          MFA Code
          <input name="mfaCode" type="text" onChange={handleChange} />
        </label>

        <button type="submit">Confirm Sign In</button>
      </form>

      <button onClick={toggleMFA}>TOGGLE MFA ({mfaType})</button>
    </>
  );
};

export default App;

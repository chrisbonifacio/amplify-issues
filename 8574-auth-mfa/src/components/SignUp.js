import React from "react";

const SignIn = ({ handleSubmit }) => {
  const initialState = {
    username: "",
    password: "",
    email: "",
    phone_number: "",
  };
  const [state, setState] = React.useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, email, phone_number } = state;
    handleSubmit({ username, password, email, phone_number });
    setState(initialState);
  };

  return (
    <form
      data-test-id="signup"
      style={{ marginBottom: "15px" }}
      onSubmit={onSubmit}
    >
      <h2>Sign Up</h2>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="phone"
          name="phone_number"
          value={state.phone_number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignIn;

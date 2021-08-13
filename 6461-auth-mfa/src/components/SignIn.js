import React from "react";

const SignIn = ({ handleSubmit }) => {
  const initialState = { username: "", password: "" };
  const [state, setState] = React.useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = state;
    handleSubmit({ username, password });
    setState(initialState);
  };

  return (
    <form data-test-id="signin" onSubmit={onSubmit}>
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
  );
};

export default SignIn;

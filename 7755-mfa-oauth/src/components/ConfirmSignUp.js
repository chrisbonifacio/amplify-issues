import React from "react";

const ConfirmSignIn = ({ handleSubmit }) => {
  const initialState = {
    username: "",
    confirmCode: "",
  };
  const [state, setState] = React.useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, confirmCode } = state;
    handleSubmit({ username, confirmCode });
    setState(initialState);
  };

  return (
    <form onSubmit={onSubmit}>
      Confirmation Code
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="confirmCode"
        value={state.confirmCode}
        onChange={handleChange}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default ConfirmSignIn;

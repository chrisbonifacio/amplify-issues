import React from "react";

const ConfirmSignIn = ({ handleSubmit }) => {
  const initialState = {
    confirmCode: "",
  };
  const [state, setState] = React.useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { confirmCode } = state;
    handleSubmit({ confirmCode });
    setState(initialState);
  };

  return (
    <form onSubmit={onSubmit}>
      Confirmation Code
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

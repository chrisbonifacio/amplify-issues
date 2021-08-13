import React from "react";

const LinkTOTOP = ({ handleSubmit }) => {
  const initialState = { code: "" };
  const [state, setState] = React.useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(state?.code);
  };

  return (
    <form data-test-id="LinkTOTOP" onSubmit={onSubmit}>
      <h2>Verify TOTP Code</h2>
      <label>
        Code
        <input type="text" name="code" onChange={handleChange} />
      </label>

      <button>Verify</button>
    </form>
  );
};

export default LinkTOTOP;

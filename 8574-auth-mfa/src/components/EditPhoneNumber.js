import React, { useState } from "react";

const EditPhoneNumber = ({ handleSubmit }) => {
  const initialState = {
    phone_number: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { phone_number } = state;
    handleSubmit({ phone_number });
    setState(initialState);
  };

  return (
    <form onSubmit={onSubmit}>
      Edit Phone Number
      <input
        type="text"
        name="phone_number"
        value={state.phone_number}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditPhoneNumber;

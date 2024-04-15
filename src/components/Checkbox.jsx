import React, { useState } from 'react';

const CheckboxForm = ({ handleSelectedIndex }) => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ event });
    handleSelectedIndex();
    console.log(checkboxes); // Do something with the selected checkboxes
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={checkboxes.option1}
          onChange={handleCheckboxChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option2"
          checked={checkboxes.option2}
          onChange={handleCheckboxChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option3"
          checked={checkboxes.option3}
          onChange={handleCheckboxChange}
        />
        Option 3
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxForm;

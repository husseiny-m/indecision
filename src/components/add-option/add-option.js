import React from 'react';

const AddOption = ({ onAddOption }) => {
  const addNewOption = (e) => {
    e.preventDefault();
    onAddOption(e.target.option.value);
    e.target.option.value = '';
  };
  return (
    <form onSubmit={addNewOption}>
      <input type="text" name="option" />
      <button type="submit">Add Option</button>
    </form>
  );
};

export default AddOption;

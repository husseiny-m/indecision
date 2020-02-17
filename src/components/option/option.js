import React from 'react';

const Option = ({ optionName, onRemoveOption }) => {
  const removeOption = () => {
    onRemoveOption(optionName);
  };
  return (
    <li>
      <span>{optionName}</span>
      <button onClick={removeOption}>
        Remove
      </button>
    </li>
  );
};

export default Option;

import React from 'react';

const Option = ({ optionName, onRemoveOption }) => {
  const removeOption = () => {
    onRemoveOption(optionName);
  };
  return (
    <li>
      <span>{optionName}</span>
      <a href="#" onClick={removeOption}>
        Remove
      </a>
    </li>
  );
};

export default Option;

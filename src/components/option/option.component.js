import React from 'react';

import './option.styles.scss';

const Option = ({ optionNumber, optionName, onRemoveOption }) => {
  const removeOption = () => {
    onRemoveOption(optionName);
  };
  return (
    <div className="option">
      <p className="option__text">
        {optionNumber}. {optionName}
      </p>
      <button className="button button--link" onClick={removeOption}>
        Remove
      </button>
    </div>
  );
};

export default Option;

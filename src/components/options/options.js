import React from 'react';

import Option from '../option/option';

const Options = ({ options, onRemoveAll, onRemoveOption }) => {
  const optionElements = options.map((option, index) => (
    <Option key={index} optionName={option} onRemoveOption={onRemoveOption} />
  ));
  const removeAll = () => {
    onRemoveAll();
  };
  return (
    <div>
      <div>
        <h3>Your Options</h3>
        <a href="#" onClick={removeAll}>
          {' '}
          Remove All
        </a>
      </div>
      <ol>{optionElements}</ol>
    </div>
  );
};

export default Options;

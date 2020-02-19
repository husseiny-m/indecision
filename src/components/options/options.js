import React from 'react';

import Option from '../option/option';

const Options = ({ options, onRemoveAll, onRemoveOption }) => {
  const optionElements = options.map((option) => (
    <Option key={option} optionName={option} onRemoveOption={onRemoveOption} />
  ));

  return (
    <div>
      <div>
        <h3>Your Options</h3>
        <button onClick={onRemoveAll}>Remove All</button>
        {options.length === 0 && <p>Please add an option to get started!</p>}
      </div>
      <ol>{optionElements}</ol>
    </div>
  );
};

export default Options;

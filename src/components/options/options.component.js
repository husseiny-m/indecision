import React from 'react';

import Option from '../option/option.component';

import './options.styles.scss';

const Options = ({ options, onRemoveAll, onRemoveOption }) => {
  const optionElements = options.map((option, index) => (
    <Option
      key={option}
      optionNumber={index + 1}
      optionName={option}
      onRemoveOption={onRemoveOption}
    />
  ));

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={onRemoveAll}>
          Remove All
        </button>
      </div>
      {options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
      )}
      {optionElements}
    </div>
  );
};

export default Options;

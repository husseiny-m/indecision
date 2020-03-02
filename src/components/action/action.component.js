import React from 'react';

import './action.styles.scss'
const Action = ({ onSelectAction, hasOptions }) => (
  <div>
    <button className="big-button" onClick={onSelectAction} disabled={!hasOptions}>
      What Should I Do?
    </button>
  </div>
);

export default Action;

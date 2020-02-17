import React from 'react';

const Action = ({ onSelectAction, hasOptions }) => (
  <div>
    <button onClick={onSelectAction} disabled={!hasOptions}>
      What Should I Do?
    </button>
  </div>
);

export default Action;

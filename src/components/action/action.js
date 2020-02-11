import React from 'react';

const Action = ({ onSelectAction }) => (
  <div>
    <button
      onClick={() => {
        onSelectAction();
      }}
    >
      What Should I Do?
    </button>
  </div>
);

export default Action;

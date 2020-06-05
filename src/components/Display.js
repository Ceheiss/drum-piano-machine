import React from 'react';
import './Display.css';

const Display = (props) => {
  return (
    <div className="Display" id="display">
      {props.currentSound}
    </div>
  );
};

export default Display;
import React from 'react';
import './BankSwitch.css';

// The UI for this element thanks to https://upmostly.com/tutorials/build-a-react-switch-toggle-component tutorial. I modified to suit my needs
const BankSwitch = ({ bankChanger, currentBank }) => {
  return (
    <>
      <input
        onChange={bankChanger}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: currentBank === "piano" && "#06D6A0" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default BankSwitch;
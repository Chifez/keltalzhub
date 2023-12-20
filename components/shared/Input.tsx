import React from 'react';

const Input = ({ label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" placeholder="input something here" />
    </div>
  );
};

export default Input;

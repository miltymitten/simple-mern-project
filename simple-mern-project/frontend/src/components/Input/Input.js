// imports React library and CSS for input design purposes
import React from 'react';

import './Input.css';
// function allpws for the input field to adjust by type, step, id, value, and change
const Input = props => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        step={props.step}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;

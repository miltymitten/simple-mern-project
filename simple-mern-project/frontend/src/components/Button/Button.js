// imports React library and CSS to for design purposes
import React from 'react';

import './Button.css';
// button function provides the frontend button component 
const Button = props => {
  return (
    <button className="button" type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;

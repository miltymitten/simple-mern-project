// imports React library and CSS to for design purposes
import React from 'react';
import './Header.css';

// button function provides the frontend header component at the top
const Header = props => {
  return (
    <header className="header">
      <h1>MERN Shop</h1>
    </header>
  );
};

export default Header;

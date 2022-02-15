// imports React library and CSS to for design purposes
import React from 'react';
import './ProductItem.css';

// function llows for the product item, name, and price to display
const ProductItem = props => {
  return (
    <li className="product-item">
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
    </li>
  );
};

export default ProductItem;

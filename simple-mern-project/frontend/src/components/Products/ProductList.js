// imports React library and CSS to for design purposes, also product items 
import React from 'react';

import ProductItem from './ProductItem';
import './ProductList.css';

// function provides the product list, in the event there is no product, and error handle first occurs
// else the product items that were imported will display 
const ProductList = props => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any products. Maybe create one?</p>;
  } else {
    content = (
      <ul className="product-list">
        {props.items.map(p => (
          <ProductItem key={p.id} name={p.title} price={p.price} />
        ))}
      </ul>
    );
  }

  return <section id="products">{content}</section>;
};

export default ProductList;

// imports React library, and allows you to return a stafeul value to store and manage date
import React, { useState } from 'react';
// buttons are imported from their routes, CSS is also imported for design purposes
import Input from '../Input/Input';
import Button from '../Button/Button';
import './NewProduct.css';

// functions are able to traverse the data stored inside the form
//  
const NewProduct = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');

  //sets the title for new product entered
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };
  // sets the price for new product entered
  const priceChangeHandler = event => {
    setEnteredPrice(event.target.value);
  };
  // addes product its title and price when submit button added 
  const submitProductHandler = event => {
    event.preventDefault();
    props.onAddProduct(enteredTitle, enteredPrice);
  };

  //the following provides a section in the HTML code for a new product
  // a user can complete a form to provide details of a new product
  // the details include; the type, label, id, price
  // some of these details will also be able to use for the constant functions above 
  return (
    <section id="new-product">
      <h2>Add a New Product</h2>
      <form onSubmit={submitProductHandler}>
        <Input
          type="text"
          label="Title"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          type="number"
          label="Price"
          step={0.01}
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <Button type="submit">ADD PRODUCT</Button>
      </form>
    </section>
  );
};

export default NewProduct;

// imports React library, and allows you to return a stafeul value to store and manage date, useEffect allows for actions in HTTP requests and browser API
import React, { useState, useEffect } from 'react';

//importing the constant from their file path
import Header from './components/Header/Header';
import NewProduct from './components/Products/NewProduct';
import ProductList from './components/Products/ProductList';
import './App.css';

// the application function runs the app on localhost port 5000, and loads json file
function App() {
  //available products will appear
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/products');

      const responseData = await response.json();

      setLoadedProducts(responseData.products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

// the following functions handles adding a product; its name and price, it also afllows for error handling
  const addProductHandler = async (productName, productPrice) => {
    // adds new product; its name and price
    try {
      const newProduct = {
        title: productName,
        price: +productPrice // "+" to convert string to number
      };
      //the product gets added into the json file
      let hasError = false;
      const response = await fetch('http://localhost:5000/product', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // checks to see if error is present
      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();
      // if error is present the following error message response will happen
      if (hasError) {
        throw new Error(responseData.message);
      }
      // new product is added and id, stored, and presented
      setLoadedProducts(prevProducts => {
        return prevProducts.concat({
          ...newProduct,
          id: responseData.product.id
        });
      });
      // error handler for when an error is present the following message appears
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  };
  //fragments allow a shorthand to access the followingconstant functions
  return (
    <React.Fragment>
      <Header />
      <main>
        <NewProduct onAddProduct={addProductHandler} />
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <ProductList items={loadedProducts} />}
      </main>
    </React.Fragment>
  );
}

export default App;

// importing packages REACT and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';

//import the CSS file the makes the index.js look pretty
import './index.css';
//imports the Application from the route/path ./APP
import App from './App';

//REACTDOM renders the root application, which can traverse all particular componenets\

ReactDOM.render(<App />, document.getElementById('root'));

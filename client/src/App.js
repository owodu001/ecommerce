import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import components
import NavMain from "./components/NavMain/Navbar";
import Home from "./components/layout/Home";
import ProductDetail from "./components/layout/ProductDetail";
import SignIn from "./components/layout/SignIn";
import Cart from "./components/layout/Cart";
import Category from "./components/layout/Category";

export default function () {
  return (
    <Router>
      <div>
        <NavMain />
        
 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={ProductDetail} />
           <Route path="/sign-in" component={SignIn} /> 
          <Route path="/cart" component={Cart} />
<<<<<<< HEAD
          <Route path="/category" component={Category} />
=======
          {/* <Route path="/sign-up" component={SignUp} /> */}
>>>>>>> a7e78833078bf2911375947a8bd2f0a3ca4432f7
        </Switch>
       
      </div>
    </Router>
  );
}

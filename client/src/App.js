import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav";
import Home from "./components/layout/Home";
import ProductDetail from "./components/layout/ProductDetail";
import SignIn from "./components/layout/SignIn";
import Cart from "./components/layout/Cart";

import "./App.css";

export default function () {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/product" component={ProductDetail} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/cart" component={Cart} />

      </div>

    </Router>
  );
}

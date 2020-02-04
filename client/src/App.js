import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import components
import NavMain from "./components/layout/Nav";
import Home from "./components/layout/Home";
import ProductDetail from "./components/layout/ProductDetail";
import SignIn from "./components/layout/SignIn";
import Cart from "./components/layout/Cart";

export default function() {
  return (
    <Router>
      <div>
        <NavMain />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={ProductDetail} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

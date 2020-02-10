import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext } from "./auth/auth";
// Import components
import { Auth } from "./auth/auth";
import NavMain from "./components/NavMain/Navbar";
import Home from "./layout/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cart from "./layout/Cart";
import Category from "./layout/Category";
import ProductDetail from "./layout/ProductDetail";
// import CheckoutOpt from "./components/CheckoutOpt/CheckoutOpt.js";
import CartProvider from "./state/cartContext";
import AddProduct from "./components/AddProduct/AddProduct";
// import PrivateRoute from "./components/private-route/PrivateRoute"


function App(props) {
  return (
    <Auth>
      <CartProvider>
        <Router>
          <div>
            <NavMain />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/product" component={ProductDetail} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/cart" component={Cart} />
              <Route path="/category" component={Category} />
              <Route path="/add-product" component={AddProduct} />
            </Switch>
          </div>
        </Router>
      </CartProvider>
    </Auth>
  );
}
export default App;
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Grommet } from "grommet";
import 'bootstrap/dist/css/bootstrap.min.css';



//Mary's Components
import ProductGrid from "./components/ProductGrid/ProductGrid"
import ProductCard from "./components/ProductCard/ProductCard"


import NavMain from "./components/NavMain/Navbar";
// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";


/* Michelle's Product Component route */
import Product from "./components/product/Product";

import { Auth } from "./auth/auth";

import "./App.css";
import HeroBanner from "./components/HeroBanner/HeroBanner";

export default function() {
  return (
    <>
      <Auth>
        <Router>
          <div className="App">
            <NavMain />
            <HeroBanner />
            {/* Category NavBar Patrick */}
            {/* Search/filter/sort element */}
            <ProductGrid/>
            {/* <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* /* Michelle's Product Component route */}
            <Route exact path="/product" component={Product} />
            <Switch>
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/games/:gameId" component={Game} /> */}
            </Switch>
          </div>
        </Router>
      </Auth>
    </>
  );
}

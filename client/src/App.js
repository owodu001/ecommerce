import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Grommet } from "grommet";
import 'bootstrap/dist/css/bootstrap.min.css';



//Mary's Components
import ProductGrid from "./components/build/ProductGrid"
import ProductCard from "./components/build/ProductCard"


import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";


import { Auth } from "./auth/auth";

import "./App.css";

export default function() {
  return (
    <>
      <Auth>
        <Router>
          <div className="App">
            <Navbar />
            <ProductGrid/>
            <ProductCard/>
            {/* <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />*/}
            <Route exact path="/" component={ProductGrid} /> 
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

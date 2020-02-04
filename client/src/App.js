import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { rgba } from "polished";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Game from "./components/game/Game";

/* Michelle's Product Component route */
import Product from "./components/product/Product";

import { Auth } from "./auth/auth";

import "./App.css";

export default function App() {
  return (
    <Auth>
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* /* Michelle's Product Component route */}
          <Route exact path="/product" component={Product} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/games/:gameId" component={Game} />
          </Switch>
        </div>
      </Router>
    </Auth>
  );
}

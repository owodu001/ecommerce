import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext, useAuth } from "../../auth/auth";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import { CartContext } from "../../state/cartContext";
import "./Navbar.css";

function NavMain() {
  const { user, logoutUser } = useContext(AuthContext);
  const cartContextValue = useContext(CartContext);

  return (
    <Navbar className="mainNav" bg="#575151" variant="dark">
      <Navbar.Brand>
        <Link className="navigation" to="/">Our Store</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <div>
          <Link className="navigation" to="/">
            Home
          </Link>
        </div>
        <div>
          {user && <Link className="navigation" onClick={logoutUser}> Sign Out </Link>}
          {!user && <Link className="navigation" to="/login"> Sign In </Link>}
        </div>
        <div>
          <Link className="navigation" to="/cart">Cart {cartContextValue.cart.length}</Link>
        </div>
      </Nav>
    </Navbar>
  );
}
export default NavMain;

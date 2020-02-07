import React, { useState, useEffect, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import {CartContext} from "../../state/cartContext";

import "./Navbar.css";

function NavMain() {
  const cartContextValue = useContext(CartContext);
  const [value, setValue] = useState("");
  const [view, setView] = useState({});
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/products").then(res => {
  //     console.log(res.data);
  //     setProduct(res.data);
  //   });
  // }, []);

  return (
    // {product.map(p => ())}
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
          <Link className="navigation" to="/sign-in">
            Sign In
          </Link>
        </div>
        <div>

  <Link className="navigation" to="/cart">Cart {cartContextValue.cart.length}</Link>

      

        </div>
      </Nav>
      {/* <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <Button
          variant="outline-light"
          onClick={() => {
            console.log(value);
          }}
        >
          Search
        </Button>
      </Form> */}
    </Navbar>
  );
}
export default NavMain;

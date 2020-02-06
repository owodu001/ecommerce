import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';

import "./Navbar.css";


function NavMain() {

  return (
    <Navbar className="mainNav" bg="#575151" variant="dark">
      <Navbar.Brand>
      <Link className="navigation" to="/">Our Store</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <div>
        <Link className="navigation" to="/">Home</Link>
        </div>
        <div>
          <Link className="navigation" to="/sign-in">Sign In</Link>
        </div>
        <div>
          <Link className="navigation"to="/cart">Cart</Link>
        </div>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}
export default NavMain;
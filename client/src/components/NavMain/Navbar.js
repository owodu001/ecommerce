import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';


function Navbar() {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Our Store</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link>
          <Link to="/home">Sign In</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/home">Cart</Link>
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}
export default Navbar;
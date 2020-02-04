import React from "react";
import { Link } from "react-router-dom";

export default function NavMain() {

    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Our Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#signin">Sign in</Nav.Link>
          <Nav.Link href="#cart">Cart</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
}

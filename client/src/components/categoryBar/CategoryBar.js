import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CategoryBar.css";


// import custom settins of categories - dynamically display category names in navbar
// import "";
// map over that json file 
// set [1]


function CategoryBar() {
  return (
    // add as many nav.items as shop categories your shop has
    <Navbar className="CategoryBar">
      <Nav className="justify-content-center items" activeKey="/home">
        <Nav.Item className="navitem">
          <Link className="Category" to="/category">
            Electronics
          </Link>
        </Nav.Item>

        <Nav.Item className="navitem">
          <Link className="Category" to="/category">
            Shoes
          </Link>
        </Nav.Item>

        <Nav.Item className="navitem">
          <Link className="Category" to="/category">
            Category 3
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default CategoryBar;

import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CategoryBar.css";
import Categories from "../../customSettings/productCategory";
import { CartContext } from "../../state/cartContext";

// import custom settins of categories - dynamically display category names in navbar
// import "";
// map over that json file 
// set [1]


function CategoryBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(Categories);
  }, []);
  return (
    // add as many nav.items as shop categories your shop has
    <Navbar className="CategoryBar">
      <Nav className="justify-content-center items" activeKey="/home">
        <Nav.Item className="navitem">
          {
            categories.map(category => <Link className="Category" to="/category"> {category} </Link>)
          }
          {/* {`/${category}`} */}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default CategoryBar;

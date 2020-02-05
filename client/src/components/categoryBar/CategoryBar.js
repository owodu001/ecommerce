import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CategoryBar.css";

function CategoryBar() {

    return (
        // add as many nav.items as shop categories your shop has
        <Navbar className="CatBar">
            <Nav className="justify-content-center items" activeKey="/home">

                <Nav.Item className="navitem">
                    <Link className="Category" to="/category1">Category 1</Link>
                </Nav.Item>

                <Nav.Item className="navitem">
                    <Link className="Category" to="/category2">Category 2</Link>
                </Nav.Item>
                
                <Nav.Item className="navitem">
                    <Link className="Category" to="/category3">Category 3</Link>
                </Nav.Item>
                
            </Nav>
        </Navbar>
    );
}

export default CategoryBar;
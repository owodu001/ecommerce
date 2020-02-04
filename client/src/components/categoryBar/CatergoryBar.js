import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

function CatergoryBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Link to="/catergory1">Catergory 1</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/catergory2">Catergory 2</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/catergory3">Catergory 3</Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default CatergoryBar;
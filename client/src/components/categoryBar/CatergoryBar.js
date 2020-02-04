import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

function CatergoryBar() {

    return (

        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Link to="/home">Catergory 1</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/home">Catergory 2</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/home">Catergory 3</Link>
            </Nav.Item>
        </Nav>
    );
}

export default CatergoryBar;
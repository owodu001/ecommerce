import React from "react";
import {Jumbotron, Container, Button } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import "./Banner.css"
import { Link } from 'react-router-dom';

function HeroBanner() {
    return (
<Jumbotron fluid className="hero">
  <Container>
    <h1 className="pageTitle">Welcome to Our Store</h1>
    <p className="details">
      Read more details about our amazing sale!!
    </p>
    <Button className="collectionButton" ><Link className="btnText" to="/category">View Sale Category</Link></Button>
  </Container>
</Jumbotron>

    )};

export default HeroBanner;

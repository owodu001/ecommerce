import React from "react";
import {Jumbotron, Container, Button } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import "./Banner.css"

function HeroBanner() {
    return (
<Jumbotron fluid className="hero">
  <Container>
    <h1 className="pageTitle">Welcome to Our Store</h1>
    <p className="details">
      Read more details about our amazing sale!!
    </p>
    <Button className="collectionButton" href="#collection">View Sale Collection</Button>
  </Container>
</Jumbotron>

    )};

export default HeroBanner;

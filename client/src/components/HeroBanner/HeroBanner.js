import React from "react";
import {Jumbotron, Container, Button } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

function HeroBanner() {
    return (
<Jumbotron fluid>
  <Container>
    <h1>Welcome to Our Store</h1>
    <p>
      Read more details about our amazing sale!!
    </p>
    <Button>View Sale Collection</Button>
  </Container>
</Jumbotron>

    )};

export default HeroBanner;

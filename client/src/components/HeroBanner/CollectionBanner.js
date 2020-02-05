import React from "react";
import {Jumbotron, Container, Button } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

function HeroBanner() {
    return (
<Jumbotron fluid>
  <Container>
    <h1>The Big Sale</h1>
    <p>
      Everything 0% - 100% Off!
    </p>

    {/* add in a button here  */}
    {/* <Button href="#">View Sale Collection</Button> */}

  </Container>
</Jumbotron>

    )};

export default HeroBanner;

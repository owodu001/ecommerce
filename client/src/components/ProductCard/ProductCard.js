import React from "react";
// import { storiesOf } from "@storybook/react";

import Card from "react-bootstrap/card";
import {Row, Nav, Container, Button, Col} from "react-bootstrap";
import "./ProductCard.css";

import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';


const ProductCard = () => (
  <Container>
    <Card className="productCard">
      <Card.ImgOverlay>
         <Card.Title className="productName">Product Name</Card.Title>
         <Card.Title className="productPrice">$9.99</Card.Title>
      </Card.ImgOverlay>
    <Card.Img variant="top" src="http://placekitten.com/250/250" />
    <Card.Body className="cardOpts">
        <Row className="cardRow">
          <Col>
            <Button className ="cardButton" >Add to Cart</Button>
          </Col>

          <Col>
            <Button className ="cardButton" href="/product"> View Details </Button>
          </Col>
        </Row>
    </Card.Body>
  </Card>
  
  {console.log("hi!")}
  </Container>
  
  
  );
  
 

export default ProductCard;
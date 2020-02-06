import React from "react";
// import { storiesOf } from "@storybook/react";

import Card from "react-bootstrap/card";
import { Row, Nav, Container} from "react-bootstrap";
import "./ProductCard.css";
import  { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';


const ProductCard = () => (
  <Container>
    <Card className="productCard">
      <Card.ImgOverlay>
    <Card.Title className="productName">Product Name</Card.Title>
  </Card.ImgOverlay>
    <Card.Img variant="top" src="http://placekitten.com/250/250" />
    <Card.Body className="cardOpts">
        <Row className="cardRow">
        <Nav.Item className="addToCart">
          <Nav.Link href="#">Add to Cart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="viewDetails">
          <Link className="navigation" to="/product">View Details</Link>
          </Nav.Link>
        </Nav.Item>
        </Row>
    </Card.Body>
  </Card>
  <p>
    $9.99
  </p>
  
  {console.log("hi!")}
  </Container>
  
  
  );
  
 

export default ProductCard;
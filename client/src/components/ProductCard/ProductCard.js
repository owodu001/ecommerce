import React, { useEffect, useState } from "react";
// import { storiesOf } from "@storybook/react";
import axios from "axios";
import Card from "react-bootstrap/card";
import { Row, Nav, Container, Col, Button} from "react-bootstrap";
import "./ProductCard.css";


import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
const ProductCard = ({ p }) => {
  return (
    <div>
      <Card className="productCard">
        <Card.ImgOverlay>
          <Card.Title className="productName">{p.title}</Card.Title>
        </Card.ImgOverlay>
        <Card.ImgOverlay>
          <Card.Title className="productPrice">{p.price}</Card.Title>
        </Card.ImgOverlay>
        <Card.Img variant="top" src={p.image} />
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
    </div>
  );
};
export default ProductCard;

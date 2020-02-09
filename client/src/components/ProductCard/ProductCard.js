import React, { useEffect, useState } from "react";
// import { storiesOf } from "@storybook/react";
// import axios from "axios";
import Card from "react-bootstrap/card";
import { Row, Nav, Container, Col, Button } from "react-bootstrap";
import "./ProductCard.css";

import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
const ProductCard = ({ p }) => {

  return (
    <div>
      <Card  className="productCard">
        <a href={`/product?${p.id}`}>
        <Card.ImgOverlay>
          <Card.Title className="productName" >{p.title} – {p.price}</Card.Title>
        {/* </Card.ImgOverlay>
        <Card.ImgOverlay variant="bottom"> */}
          {/* <Card.Title className="productPrice"></Card.Title> */}
        </Card.ImgOverlay>
        
        <Card.Img className="cardImage" variant="top" src={p.image} />
        </a>
        <Card.Body className="cardOpts">
          <Row >
            <Col className="cardCol">
              <AddToCart className="cardButton" item={p} />
            </Col>
            <Col >
              <Button className="cardButton" href={`/product?${p.id}`}>
                View Details
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProductCard;

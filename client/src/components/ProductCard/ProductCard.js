import React, { useEffect, useState } from "react";
// import { storiesOf } from "@storybook/react";
import axios from "axios";
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
      <Card className="productCard">
        <Card.ImgOverlay>
          <Card.Title className="productName">{p.title}</Card.Title>
        </Card.ImgOverlay>
        <Card.ImgOverlay variant="bottom">
          <Card.Title className="productPrice">{p.price}</Card.Title>
        </Card.ImgOverlay>
        <Card.Img className="cardImage" variant="top" src={p.image} />
        <Card.Body className="cardOpts">
          <Row className="cardRow">
            <Col>
              <AddToCart item={p} />
              {/* <Button className="cardButton" >Add to Cart</Button> */}
            </Col>
            <Col>
              {/* <Button className="cardButton" href="/product"> View Details </Button> */}
              <Link className="cardButton" to={`/product?${p._id}`}>
                View Details
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProductCard;

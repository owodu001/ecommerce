import React from "react";
// import { storiesOf } from "@storybook/react";

import Card from "react-bootstrap/card";
import {Row, Nav} from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = () => (
    <Card>
      <Card.ImgOverlay>
    <Card.Title className="productName">Product Name</Card.Title>
  </Card.ImgOverlay>
    <Card.Img variant="top" src="http://placekitten.com/250/250" />
    <Card.Body>
        <Row className="align-content-center">
        <Nav.Item>
          <Nav.Link href="#">Add to Cart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/productdetail">View Details</Nav.Link>
        </Nav.Item>
        </Row>
    </Card.Body>
  </Card>
  );
  
export default ProductCard;
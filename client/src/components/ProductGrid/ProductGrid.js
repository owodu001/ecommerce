import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css"


const ProductGrid = () => (
  <Container>
    <Row className="gridRow" >
      <Col><ProductCard /></Col>
      <Col><ProductCard /></Col>
      <Col><ProductCard /></Col>
      <Col><ProductCard /></Col>
    </Row>
  </Container>
);

export default ProductGrid
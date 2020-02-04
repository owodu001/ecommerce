import React from "react";

import {Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = () => (
    <Container>
    <Row>
      <Col><ProductCard /></Col>
      <Col><ProductCard /></Col>
      <Col><ProductCard /></Col>
    </Row>
  </Container>
);

export default ProductGrid
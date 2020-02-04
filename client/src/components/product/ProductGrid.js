import React from "react";
// import { storiesOf } from "@storybook/react";

import {Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductGrid = () => (
    <Container>
    <Row>
      <Col><ProductCard /></Col>
      <Col><ProductCard /></Col>
      <Col><ProductCard /></Col>
    </Row>
  </Container>
);

// export default ("Grid", module).add("N-column layout", () => <ProductGrid />);
export default ProductGrid
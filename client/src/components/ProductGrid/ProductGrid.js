import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import SearchComp from "../Search/SearchComp";
import axios from "axios";
import "./ProductGrid.css";

const ProductGrid = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then(res => {
      setProduct(res.data);
    });
  }, []);

<<<<<<< HEAD
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
=======
  function filterProducts(item) {
    console.log(item);
    const filteredProduct = product.filter(product =>
      product.title.toLowerCase().includes(item.toLowerCase())
    );
    setProduct([...filteredProduct]);
  }

  return (
    <Container>
      <SearchComp filterProducts={filterProducts} />

      <Row className="gridRow">
        {product.map(p => (
          <Col md={4}>
            <ProductCard p={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
>>>>>>> 9e3b0418674d3326e01b352c7c401c1af1745715

export default ProductGrid;

import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import SearchComp from "../Search/SearchComp";
import axios from "axios";
import "./ProductGrid.css";
// import FootNav from "../Footer/Footer";
// import Pages from "../Pagination/Pagination";

const ProductGrid = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then(res => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, []);
  function sortProducts(item) {
    console.log(item);
    const filteredProduct = product.filter(product =>
      product.title.toLowerCase().includes(item.toLowerCase())
    );
    setProduct([...filteredProduct]);
  }
  function filterProducts(item) {
    console.log(item);
    const filteredProduct = product.filter(product =>
      product.title.toLowerCase().includes(item.toLowerCase())
    );
    setProduct([...filteredProduct]);
  }
  function searchProducts(item) {
    console.log(item);
    const filteredProduct = product.filter(product =>
      product.title.toLowerCase().includes(item.toLowerCase())
    );
    setProduct([...filteredProduct]);
  }

  return (
    <>
      <Container>
        <SearchComp filterProducts={filterProducts} />

        <Row className="gridRow">
          {product.map(p => (
            <Col lg={4} md={6} sm={12} key={p.id}>
              <ProductCard p={p} key={p.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductGrid;

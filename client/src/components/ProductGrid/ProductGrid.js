import React, { useState, useEffect, useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import SearchComp from "../Search/SearchComp";
import axios from "axios";
import "./ProductGrid.css";
import { AuthContext } from "../../auth/auth";
// import FootNav from "../Footer/Footer";
// import Pages from "../Pagination/Pagination";

const ProductGrid = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState([]);
  
  const [productsByPrice, setProductsByPrice] = useState(product);
  
  useEffect(() => {
    // axios.get("https://les-meilleurs.herokuapp.com/api/products").then(res => {
    axios.get("/api/products").then(res => {
      setProduct(res.data);
      setProductsByPrice(res.data)
      console.log(res.data);
    });
  }, []);

  function sortPriceLow() {
    let sortedArray = productsByPrice;
      sortedArray.sort(function(a, b) {
        var productA = a.price;
        var productB = b.price;
        if (productA < productB) {
          return -1;
        }
        if (productA > productB) {
          return 1;
        }
        return 0;
      });
      console.log(">>>>>>>>>>>>>>> wtf",[...sortedArray]);
      setProductsByPrice([...sortedArray]);
    }

// this function is what makes the search feature work 
  function filterProducts(item) {
    console.log(item);
    const filteredProduct = product.filter(product =>
      product.title.toLowerCase().includes(item.toLowerCase())
    );
    setProduct([...filteredProduct]);
  }
  // function searchProducts(item) {
  //   console.log(item);
  //   const filteredProduct = product.filter(product =>
  //     product.title.toLowerCase().includes(item.toLowerCase())
  //   );
  //   setProduct([...filteredProduct]);
  // }

  console.log(product);
  return (
    <>
      <Container>
        <SearchComp
          filterProducts={filterProducts}
          sortPriceLow={sortPriceLow}
        />

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

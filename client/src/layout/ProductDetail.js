import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Image,
  InputGroup,
  FormControl,
  Tab,
  Tabs
} from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetail.css";
import AddToCart from "../components/AddToCart/AddToCart";

export default function({ p, location }) {
  // const [counter, setCounter] = useState(0);
  // const [value, setValue] = useState("");
  const [product, setProduct] = useState({});


  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/productsTest").then(res => {
  //     setProduct(res.data);
  //     console.log(res.data);
  //   });
  // }, []);
  
  
  useEffect(() => {
    const productId = location.search.split("?")[1];
    
    axios.get(`/api/productsTest/${productId}`).then(res => {
      // const productImage = res.data.image;
      // const productTitle = res.data.title;
      // const productPrice = res.data.price;
      // const productQuantity = res.data.quantity;
      // const productCategory = res.data.category;
      
      setProduct(res.data);
      console.log(res.data);
      
      
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
              <Card>
                <Col>
                <Card.Img variant="top" src={product.image} />
                </Col>
                <Col>
                <Card.Body>
                  <Card.Title>
                    {product.title}
                  </Card.Title>
                  <Card.Title>{product.price}</Card.Title>
                  <Card.Text>
            <Row style={{ fontWeight: "bold" }}>Product Details:</Row>
            <Row>Category: {product.category}</Row>
            <Row>Quantity: {product.quantity}</Row>
            <Row>Product description of this amazing product that you MUST HAVE IN YOUR LIFE OR ELSE. </Row>
            </Card.Text>
                 <AddToCart/>
                </Card.Body>
                </Col>
              </Card>
              </Row>
            </Container>

        <Container className="tabsContainer">
          <Col>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="description" title="Description">
                <p>Product info!</p>
              </Tab>
              <Tab eventKey="review" title="Reviews">
                <p>Coming Soon!</p>
              </Tab>
              <Tab eventKey="custom" title="Custom Tab">
                <p>Custom Detail!</p>
              </Tab>
            </Tabs>
          </Col>
        </Container>
        </>
  
  );
}

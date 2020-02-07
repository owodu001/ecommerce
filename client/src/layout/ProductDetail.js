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
  const [product, setProduct] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/api/productsTest").then(res => {
      setProduct(res.data);
      // console.log(res.data);
    });
  }, []);


  useEffect(() => {
    const productId = location.search.split("?")[1];
    axios.get(`/api/productsTest/${productId}`).then(res => console.log(res.data));
    console.log({productId});
    // const productImg = location.search.split[2];
    // const productId = location.search.split[3];
    // const productId = location.search.split[4];
    // const productId = location.search.split[5];
  }, []);

  return (
    <>
      <Container>
        <Row>
              <Card>
                <Col>
                <Card.Img variant="top" src="http://placekitten.com/200/200" />
                </Col>
                <Col>
                <Card.Body>
                  <Card.Title>
                    {/* {productId} */}
                  </Card.Title>
                  <Card.Title>$250</Card.Title>
                  <Card.Text>
                    BUY THIS DUMB THING
            <Row style={{ fontWeight: "bold" }}>Product Details:</Row>
            <Row>Category: </Row>
            <Row>Size: M, L, XL </Row>
            <Row>Categories: blazers</Row>
            <Row>Brand: fashion, clothing, men</Row>
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

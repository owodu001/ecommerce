import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  Tab,
  Tabs
} from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetail.css";
import AddToCart from "../components/AddToCart/AddToCart";
import FootNav from "../components/Footer/Footer"

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
      <Container className="detailsContainer">
        <Card>
            <Row>
              <Col>
                <Card.Img className="detailsImages" src={product.image} />
              </Col>
              <Col className="noPad">
                <Card.Body>
                  <Card.Title>
                    {product.title}
                  </Card.Title>
                  
                  <Card.Title>{product.price}</Card.Title>
            <Card.Text>
              <Row style={{ fontWeight: "bold" }}>Product Details:</Row>
              <br/>
              <Row>This is a product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. </Row>
              <Row><strong>Category :  </strong> {product.category}</Row>
              <Row><strong>Quantity : </strong> {product.quantity}</Row>
            </Card.Text>
            <br/>
            <br/>
                 <AddToCart/>
                 <br/>
                 </Card.Body>
                 <Card.Img thumbnail className="thumbnail" src={product.image} />
                <Card.Img thumbnail className="thumbnail" src={product.image} />
                <Card.Img thumbnail className="thumbnail" src={product.image} />
                </Col>
              </Row>
              </Card>
            </Container>

        <Container className="tabsContainer">
          <Col>
            <Tabs className="tabtop" defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="description" title="Description">
                <p className="tab">Product info!</p>
              </Tab>
              <Tab eventKey="review" title="Reviews">
                <p className="tab">Coming Soon!</p>
              </Tab>
              <Tab eventKey="custom" title="Custom Tab">
                <p className="tab">Custom Detail!</p>
              </Tab>
            </Tabs>
          </Col>
        </Container>
        <FootNav/>
        </>
  
  );
}

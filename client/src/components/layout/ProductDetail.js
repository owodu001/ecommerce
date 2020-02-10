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
import AddToCart from "../AddToCart/AddToCart";
import ProductCard from "../ProductCard/ProductCard";

export default function({ p, location }) {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const [product, setProduct] = useState({});

  //   setProduct to res.data
  //  display {} dynamically in view
  // https://les-meilleurs.herokuapp.com/api/products/:id
  useEffect(() => {
    const productId = location.search.split("?")[1];
    console.log(productId);
    axios
      .get(`https://les-meilleurs.herokuapp.com/api/products/${productId}`)
      .then(res => setProduct(res.data));
    // console.log(location);
  }, []);

  return (
    <>
      {" "}
      <Container>
        <Row className="mt-5">
          {/* <Col md={6}>
            <Image src="http://placekitten.com/400/400" rounded />
          </Col> */}
          <Col md={6}>
            <Row>
              <Card>
                <Card.Img variant="top" src={product.image1} alt="image" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Title>${product.price}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <InputGroup
                    className="mb-3"
                    style={{ width: "130px", alignContent: "center" }}
                  >
                    <InputGroup.Prepend>
                      <Button
                        variant="info"
                        onClick={() => setCounter(counter - 1)}
                      >
                        -
                      </Button>{" "}
                    </InputGroup.Prepend>
                    <FormControl
                      type="text"
                      value={counter}
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon"
                      onChange={({ target }) => setCounter(target.value)}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="info"
                        onClick={() => setCounter(parseInt(counter) + 1)}
                      >
                        +
                      </Button>{" "}
                    </InputGroup.Append>
                  </InputGroup>
                  <AddToCart item={p} />
                  {/* <Button
                    variant="info"
                    onClick={() => {
                      console.log(counter);
                    }}
                  >
                    Add to Cart
                  </Button> */}
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row>
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
        </Row>
      </Container>
    </>
  );
}

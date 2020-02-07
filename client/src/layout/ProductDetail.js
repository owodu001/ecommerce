import React, { useState } from "react";
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

import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetail.css";
import AddToCart from "../components/AddToCart/AddToCart";

export default function() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  return (
    <>
    <hr/>
      <Container className="detailContainer">
              <Card>
                <Row>
                  <Col >
                <Card.Img variant="top" src="http://placekitten.com/200/200" />
                </Col>
                <Col className="noPad">
                <Card.Body>
                  <Card.Title>
                    WD·NY Black – Men's Palm Burgundy Jacket
                  </Card.Title>
                  <Card.Title>$760</Card.Title>
                  <Card.Text>
                    Bring some funky nostalgia to your next event — and every
                    one after — with the Denim Blazer WD·NY Black – Men's Palm
                    Burgundy Jacket. This suit jacket is the perfect way to add
                    some fun style to your dressy look. Pair it with a floral
                    button-down shirt and dress pants for the perfect mix of
                    formal and unique.
                  </Card.Text>
                  <Card.Text>
                    <Row style={{ fontWeight: "bold" }}>Product Details:</Row>
                    <Row>SKU: 9624</Row>
                    <Row>Size: M, L, XL </Row>
                    <Row>Categories: blazers</Row>
                    <Row>Brand: fashion, clothing, men</Row>
                  </Card.Text>
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
                  <AddToCart/>
                </Card.Body>
                </Col>
              </Row>
              </Card>
            </Container>
          <hr></hr>
        <Container className="tabsContainer">
        <Row>
          <Col>
            <Tabs className="tabtop"defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab  className="tab" eventKey="description" title="Description">
                <p className="tabText" >Product info!</p>
              </Tab>
              <Tab className="tab" eventKey="review" title="Reviews">
                <p className="tabText">Coming Soon!</p>
              </Tab>
              <Tab className="tab" eventKey="custom" title="Custom Tab">
                <p className="tabText">Custom Detail!</p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <hr></hr>
    </>
  );
}

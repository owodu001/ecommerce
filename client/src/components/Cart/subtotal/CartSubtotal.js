import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardSubtotal.css";
import { Button, Container, Col, Row } from "react-bootstrap";

export default function() {
  return (
    <>
      <Container>
        <Row className="centerThings font">Cart Totals</Row>
        <Row>
          <Col>Subtotal</Col>
          <Col>$760</Col>
        </Row>
        <Row>
          <Col>Shipping</Col>
          <Col>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Flat Rate: $1.50" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Local Pickup: $2.00" />
            </Form.Group>
            <p>Estimate for India</p>
          </Col>
        </Row>
        <Row>
          <Col>Shipping Address</Col>
          <Col>15555 Anderson Lakes Pkwy, US</Col>
        </Row>
        <Row>
          <Col>Total</Col>
          <Col>$761.50</Col>
        </Row>
        <Button className="centerThings font" variant="primary">
          Proceed to Checkout
        </Button>{" "}
      </Container>
    </>
  );
}

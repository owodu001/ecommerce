import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartSubtotal.css";
import { Button, Container, Col, Row, Form } from "react-bootstrap";

export default function() {
  return (
    <>
      <Container className="border">
        <Row className="centerThings font">Cart Totals</Row>
        <Row className="font">
          <Col>Subtotal</Col>
          <Col>$760</Col>
        </Row>
        <Row>
          <Col className="font">Shipping</Col>
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
          <Col className="font">Shipping Address</Col>
          <Col className="font">15555 Anderson Lakes Pkwy</Col>
        </Row>
        <Row>
          <Col className="font">Total</Col>
          <Col>$761.50</Col>
        </Row>
        <Button className="centerThings" variant="primary">
          Proceed to Checkout
        </Button>{" "}
      </Container>
    </>
  );
}

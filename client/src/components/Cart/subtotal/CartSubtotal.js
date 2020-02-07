import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartSubtotal.css";
import { Button, Container, Col, Row, Form } from "react-bootstrap";
import PayButton from "../../PayPalButton/PayPalButton";

export default function({cartSubtotal}) {
  return (
    <>
      <Container className="border">
        <Row className="centerThings font mb-3">Cart Totals</Row>
        <Row className="font mb-3">
          <Col>Subtotal ${cartSubtotal}</Col>
          <Col>Cart Total</Col>
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
          </Col>
        </Row>
        <Row>
          <Col className="font mb-3">Total</Col>
          <Col>Cart Total</Col>
        </Row>
        <Button
          className="centerButton"
          variant="primary"
          to="/checkout-opt"
          onClick={() => {
            console.log("What up");
          }}
        >
          Proceed to Checkout
        </Button>{" "}
        {/* <Button> */}
        <PayButton />
        {/* </Button> */}
      </Container>
    </>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProduct from "../components/Cart/CartProduct";
import { Col, Row, Container } from "react-bootstrap";
import CartSubtotal from "../components/Cart/subtotal/CartSubtotal";

export default function() {
  return (
    <>
    <hr/>
    <Container>
      <Row>
        <Col>
          <CartProduct />
        </Col>
        <Col>
          <CartSubtotal />
        </Col>
      </Row>
    </Container>
    </>
  );
}

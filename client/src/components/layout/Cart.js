import React, {useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProduct from "../Cart/CartProduct";
import { Col, Row, Container } from "react-bootstrap";
import CartSubtotal from "../Cart/subtotal/CartSubtotal";
import {CartContext} from "../../state/cartContext";


export default function() {

  const cartContextValue = useContext(CartContext)
  console.log(cartContextValue)
  console.log("hillo")

  return (
    <>
    <hr/>
    <Container>
      <Row>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
    </>
  );
}

import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartProduct.css";

import {
  Container,
  Card,
  Button,
  InputGroup,
  FormControl,
  Col,
  Row
} from "react-bootstrap";
import AddToCart from "../AddToCart/AddToCart";

const CartProduct = ({product}) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Container>
        <ul className="cartList">
          <li>
            <Card className="cartCard">
              <Row>
                <Col>
                
                  <Card.Img
                    variant="left"
                    src={product.image}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => {
                        console.log("What up");
                      }}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default CartProduct;
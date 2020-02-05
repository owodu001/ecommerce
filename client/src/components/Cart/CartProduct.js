import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CartProduct.css";

import {Container, Card, Button, InputGroup, FormControl, Col, Row} from "react-bootstrap";

const CartProduct = () => (
<Container>
    <ul className="cartList">
        <li >
        <Card>
            <Row>
                <Col>
            <Card.Img variant="left" src="http://placekitten.com/200/200" />
            </Col>
            <Col>
            <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                $Price
                </Card.Text>
                <Button variant="danger">Remove</Button>
                <InputGroup
                    className="mb-3"
                    style={{ width: "130px", alignContent: "center" }}
                  >
                    <InputGroup.Prepend>
                      <Button variant="info">-</Button>{" "}
                    </InputGroup.Prepend>
                    <FormControl
                      type="text"
                      placeholder="0"
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon"
                    />
                    <InputGroup.Append>
                      <Button variant="info">+</Button>{" "}
                    </InputGroup.Append>
                  </InputGroup>
            </Card.Body>
            </Col>
            </Row>
            </Card>
        </li>




    </ul>
</Container>





);

export default CartProduct;




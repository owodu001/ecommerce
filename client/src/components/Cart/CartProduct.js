import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Button, InputGroup, FormControl} from "react-bootstrap";

const CartProduct = () => (
<Container>
    <ul>
        <li >
        <Card>
            <Card.Img variant="left" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
            </Card>
        </li>




    </ul>
</Container>





);

export default CartProduct;




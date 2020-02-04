import React from "react";
import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Image,
  InputGroup,
  FormControl
} from "react-bootstrap";

export default function() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <Image src="http://placekitten.com/400/400" rounded />
          </Col>
          <Col md={6}>
            <Row>
              <Card>
                <Card.Img variant="top" src="http://placekitten.com/200/200" />
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
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="info">-</Button>{" "}
                    </InputGroup.Prepend>
                    <FormControl
                      type="text"
                      placeholder="Input group example"
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon"
                    />
                    <InputGroup.Append>
                      <Button variant="info">+</Button>{" "}
                    </InputGroup.Append>
                  </InputGroup>
                  <Button variant="info">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row>Product Details</Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

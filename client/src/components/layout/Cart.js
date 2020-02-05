import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProduct from "../Cart/CartProduct";
import { Col, Row, Container} from "react-bootstrap";
import CartSubtotal from "../Cart/CartSubtotal";


export default function () {
    return (
    <Container>
            <Row>
            <Col>
            <CartProduct/>
            </Col>
            <Col>
            {/* <CardSubtotal/> */}
            </Col>
            </Row>
    </Container>
    );
};

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"

/*
The footnav will need to be updated with business contact information
*/

function FootNav() {

    return (
        <Container className="footerContainer"fluid>
            <Row>
                <Col className="contact">
                    <h4>Contact Us:</h4>
                    <p>0-000-000-0000</p>
                    <p>emailUs@Business.com</p>
                    <p>Street Address,
                       City, State Zip Code
                </p>
                </Col>
                <Col>
                    <img src="http://placekitten.com/100/100" alt="business logo" className="footlogo"/>
                </Col>
                    <Col className="sociallink">
                        
                        Social Links
                    </Col>
            </Row>
        </Container>

            );
        }
export default FootNav;
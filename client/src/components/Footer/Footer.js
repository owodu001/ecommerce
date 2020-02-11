import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
import { Link } from "react-router-dom";
// Social Link Icons from Font Awesome - make sure you have the font-awesome packages installed. https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Social Icons
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

// Basic Contact Icons
import {faPhone } from "@fortawesome/free-solid-svg-icons"
import {faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {faMapPin } from "@fortawesome/free-solid-svg-icons"
import {faCircle} from "@fortawesome/free-solid-svg-icons"
/*
The footnav will need to be updated with business contact information
*/

function FootNav() {

    return (
        <Container className="footerContainer"fluid>
            <Row>
                <Col className="contact">
                    {/* Update your contact information here! */}
                    <a className="footLink" href="tel:1-000-000-0000"><p><FontAwesomeIcon className="contactIcon" icon={faPhone} />1-000-000-0000</p></a>
                    <a className="footLink" href="mailto:emailUs@Business.com"><p><FontAwesomeIcon className="contactIcon" icon={faEnvelope} />emailUs@Business.com</p></a>
                    <a className="footLink" href="https://maps.google.com" target="_blank"><p><FontAwesomeIcon className="contactIcon" icon={faMapPin} />Business Name <br/> Street Address <br/>
                       City, State Zip Code
                </p></a>
                </Col>
                {/* Add your business logo here. */}
                <Col className="logo">
                    {/* link logo image in src  */}
                    {/* <img src="" alt="business logo" className="footlogo"/> */}
                    {/* <FontAwesomeIcon icon={faCircle} size="6x"/> */}
                    <div className="logoContainer"><Link to="/add-product">Logo</Link></div>
                </Col>

                {/* Here is where you will add the links to your social profiles within the href quotes. 
                To add different social networks, import the icon from font-awesome above, and reference the icon in the <FontAwesomeIcon/> tags.*/}
                    <Col className="sociallink">
                    <a className="footLink" href="#" target="_blank"><p>Facebook<FontAwesomeIcon className="socialIcon" icon={faFacebook} /></p></a>
                    <a className="footLink" href="#" target="_blank"><p>Instagram<FontAwesomeIcon className="socialIcon"icon={faInstagram} /></p></a>
                    <a className="footLink" href="#" target="_blank"><p>Twitter<FontAwesomeIcon className="socialIcon" icon={faTwitter} /></p></a>
                    <a className="footLink" href="#" target="_blank"><p>LinkedIn<FontAwesomeIcon className="socialIcon" icon={faLinkedin} /></p></a>
                    </Col>
            </Row>
        </Container>

            );
        }
export default FootNav;
import {React, useState, render} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";


export default function CheckoutOpt() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How would you like to checkout?
          </Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" to="/checkout-opt" onClick={handleClose}>
            Sign in and Checkout
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Checkout as Guest
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<CheckoutOpt />);
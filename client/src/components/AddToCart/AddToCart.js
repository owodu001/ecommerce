import React, { useContext, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Overlay, Tooltip } from "react-bootstrap";
import { CartContext } from "../../state/cartContext";
// import CartProduct from "../Cart/CartProduct";
import "./AddToCart.css";

export default function AddToCart({ item }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const cartContextValue = useContext(CartContext);
  console.log("Item added:", cartContextValue.cart, item);

  return (
    <>
      <Button className="AddToCart" ref={target}
        onClick={() => {
          const cart = [...cartContextValue.cart, item];
          setShow(!show)
          // stringify (javascript to string)
          localStorage.setItem("shoppingcart", JSON.stringify(cart));
          cartContextValue.setCart(cart);
        }}
      >
        + Add to Cart
      </Button>
      <Overlay className="addToCart" target={target.current} show={show} placement="bottom">
        {props => (
          <Tooltip id="overlay-example" {...props}>
            Item Added
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

import React, { useContext, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { CartContext } from "../../state/cartContext";
import { AuthContext, useAuth } from "../../auth/auth";

// import CartProduct from "../Cart/CartProduct";

export default function AddToCart({ item }) {
  const { user } = useContext(AuthContext);
  let history = useHistory();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const cartContextValue = useContext(CartContext);
  console.log("Item added:", cartContextValue.cart, item);

  return (
    <>
      {/* <Button ref={target} onClick={() => setShow(!show)}>
        Add to Cart
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {props => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay> */}

      <Button
        onClick={() => {
          if (!user) {
            return history.push("/login");
          }

          const cart = [...cartContextValue.cart, item];

          // stringify (javascript to string)
          localStorage.setItem("shoppingcart", JSON.stringify(cart));
          cartContextValue.setCart(cart);
        }}
      >
        Add to Cart
      </Button>
    </>
  );
}

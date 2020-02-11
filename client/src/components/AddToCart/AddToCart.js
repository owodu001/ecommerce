import React, { useContext, useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Overlay, Tooltip } from "react-bootstrap";
import { CartContext } from "../../state/cartContext";
import { AuthContext } from "../../auth/auth";

// import CartProduct from "../Cart/CartProduct";
import "./AddToCart.css";

//Icons from Font Awesome - make sure you have the font-awesome packages installed. https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Basic Icons
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"


export default function AddToCart({ item }) {
  const { user } = useContext(AuthContext);
  let history = useHistory();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const cartContextValue = useContext(CartContext);
  console.log("Item added:", cartContextValue.cart, item);

  // useEffect(() => {

  // }, [user])
  return (
    <>
      <Button className="AddToCart" ref={target}
        onClick={() => {
          console.log("User? ", user);
          if (!user) {
            return history.push("/login");
          }

          const cart = [...cartContextValue.cart, item];
          setShow(!show)
          // stringify (javascript to string)
          localStorage.setItem("shoppingcart", JSON.stringify(cart));
          cartContextValue.setCart(cart);
        }}

      ><FontAwesomeIcon icon={faCartPlus} className="FAIcon" />

        Add to Cart
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

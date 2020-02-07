import React, { useContext, useState, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import { CartContext } from "../../state/cartContext";
// import CartProduct from "../Cart/CartProduct";

export default function AddToCart ({ item }) {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const cartContextValue = useContext(CartContext);
    console.log("Item added:",cartContextValue.cart, item);

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
    
       <Button onClick={()=> {
            console.log("add to cart",item)
            const shoppingCartLs = localStorage.getItem('shoppingcart') || "[]"
            // parse (string to javascript)
            const shoppingCart = JSON.parse(shoppingCartLs)
            shoppingCart.push(item)
            console.log(shoppingCart)
            // stringify (javascript to string)
            localStorage.setItem('shoppingcart', JSON.stringify(shoppingCart));
           cartContextValue.setCart([...cartContextValue.cart, item]);
       }} >
           Add to Cart
       </Button>
</>
    )
};

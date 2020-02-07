import React, { useContext, useState, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import { CartContext } from "../../state/cartContext";
// import CartProduct from "../Cart/CartProduct";

export default function RemoveFromCart ({ item }) {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const cartContextValue = useContext(CartContext);

    console.log("Item removed:",cartContextValue.cart, item);


    return (
        <>
    
       <Button onClick={()=> {
           cartContextValue.setCart([...cartContextValue.cart, item]);
       }} >
           Add to Cart
       </Button>

     
  }
</>
    )
};

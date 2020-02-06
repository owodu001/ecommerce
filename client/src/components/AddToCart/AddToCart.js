import React, { useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import { CartContext } from "../../state/cartContext";
// import CartProduct from "../Cart/CartProduct";

export default function AddToCart ({ item }) {
    const cartContextValue = useContext(CartContext);
    console.log("??????????",cartContextValue);
    return (

       <Button onClick={()=> {
           cartContextValue.setCart([...cartContextValue.cart, item]);
       }} >
           Add to Cart
       </Button>

    )
};

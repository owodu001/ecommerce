import React, { useContext, useState, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import { ItemContext } from "../../state/ItemContext";
// import CartProduct from "../Cart/CartProduct";



export default function AddToCart ({ item }) {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const cartContextValue = useContext(CartContext);

    console.log("Item added:",cartContextValue.cart, item);
    

    return (
<>  
       <Button to="" onClick={()=> {
           ItemContextValue.setCart([...ItemContextValue.cart, item]);
       }} >
           View Details 
       </Button>
</>
    )
    

};

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
    const removedItem = this.state.items.indexOf(itemId)
    var deleted = this.state.items.splice(itemToBeDeleted, 1)
    this.setState(this.state) 
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

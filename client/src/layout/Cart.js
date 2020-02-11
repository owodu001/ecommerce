import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProduct from "../components/Cart/CartProduct";
import { Col, Row, Container } from "react-bootstrap";
import CartSubtotal from "../components/Cart/subtotal/CartSubtotal";
import { CartContext } from "../state/cartContext";

// import ProductCard from "../components/ProductCard/ProductCard";
// THIS IS WHERE THE FUNCTIONS GO TO UPDATE TOTAL
// // function addToCart (){
// //   const cartProdcuts = [];
// //   return cartProducts.map(r)
// }
// THIS WILL ADD ANOTHER ONE OF THE PRICE VALUE TO THE TOTAL
// plusButton
// //if statements
// // THIS WILL SUBTRACT ANOTHER ONE OF THE PRICE VALUE TO THE TOTAL
// minusButton
// // THIS WILL REMOVE ALL INSTANCES OF THIS PRODUCT FROM THE TOTAL
// removeButton
// calculateTotal

export default function() {
  // removeProduct = id => {
  const [total, setTotal] = useState(0);
  const cartContextValue = useContext(CartContext);
  console.log(cartContextValue.cart);
  useEffect(() => {
    let tempValue = 0;
    cartContextValue.cart.forEach((item, i) => {
      tempValue += item.price;
    });
    console.log(tempValue);
    setTotal(tempValue);
  }, [cartContextValue.cart]);

  return (
    <>
      <hr />
      <Container>
        <Row>
          <Col lg={8} sm={12}>
            {cartContextValue.cart.map(item => (
              <CartProduct key={item._id} product={item} />
            ))}
          </Col>
          <Col lg={4} sm={12}>
            <CartSubtotal cartSubtotal={total} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

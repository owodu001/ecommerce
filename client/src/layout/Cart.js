import React, { useContext } from "react";
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

  // }

  const cartContextValue = useContext(CartContext);

  console.log(cartContextValue.cart);

  return (
    <>
      <hr />
      <Container>
        <Row>
          <Col>
            {cartContextValue.cart.map(item => (
              <CartProduct key={item.id} product={item} />
            ))}
          </Col>
          <Col>
            <CartSubtotal />
          </Col>
        </Row>
      </Container>
    </>
  );
}

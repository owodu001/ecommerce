import React, { useState } from "react";

export const CartContext = React.createContext();

export default function Context({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
}
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) { 
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, showCartModal, toggleCartModal }}>
      {children} 
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

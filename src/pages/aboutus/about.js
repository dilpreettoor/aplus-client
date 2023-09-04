import React, { useEffect } from "react";
import CartModal from "../../modals/cart/cartmodal";
import { useCart } from "../../context/CartContext";
import "./about.css";

const AboutUs = () => {
  const { cartItems, setCartItems, showCartModal } = useCart();

  return (
    <section className="about">
      <h2 className="about__title">Meet the team</h2>
      {showCartModal && (
        <CartModal cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </section>
  );
};

export default AboutUs;

import React, { useEffect } from "react";
import CartModal from "../../modals/cart/cartmodal";
import { useCart } from "../../context/CartContext";
import { useLocation } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const { cartItems, setCartItems, showCartModal } = useCart();
  const location = useLocation();
  const totalPrice = location.state.totalPrice;

  return (
    <section className="checkout">
      <div className="checkout__title-wrapper">
        <h2 className="checkout__title">Summary</h2>
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="checkout__contact-wrapper">
      <h2 className="checkout__contact-title">Enter your information</h2>
      <input placeholder="Email"></input>
      <input placeholder="Phone number"></input>
      </div>

      <div className="checkout__CTA">
          <button className="checkout__CTA--btn">Continue</button>
      </div>

      {showCartModal && (
        <CartModal cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </section>
  );
};

export default Checkout;

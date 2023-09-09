import React, { useEffect } from "react";
import CartModal from "../../modals/cart/cartmodal";
import { useCart } from "../../context/CartContext";
import "./about.css";

const AboutUs = () => {
  const { cartItems, setCartItems, showCartModal } = useCart();

  return (
    <section className="about">
      <h2 className="about__title">About Our Convenience Store</h2>
      <p className="about__description">
        Welcome to our friendly neighborhood convenience store! We take pride in serving our community by offering a wide range of essential products and services. Here's what you can expect from us:
      </p>

      <div className="about__highlights">
        <div className="about__highlight">
          <h3 className="about__highlight-title">Quality Products</h3>
          <p className="about__highlight-description">
            We stock high-quality groceries, snacks, beverages, and everyday items to meet your needs.
          </p>
        </div>

        <div className="about__highlight">
          <h3 className="about__highlight-title">Friendly Staff</h3>
          <p className="about__highlight-description">
            Our dedicated team is always ready to assist you and provide excellent customer service.
          </p>
        </div>

        <div className="about__highlight">
          <h3 className="about__highlight-title">Convenient Hours</h3>
          <p className="about__highlight-description">
            We're open late and on weekends to accommodate your busy schedule.
          </p>
        </div>
      </div>

      {showCartModal && (
        <CartModal cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </section>
  );
};

export default AboutUs;

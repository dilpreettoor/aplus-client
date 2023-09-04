import React from "react";
import Homer from "../../assets/Images/homer.png";
import { useCart } from "../../context/CartContext";
import CartModal from "../../modals/cart/cartmodal";
import './notfound.css';

const NotFound = () => {
  const { cartItems, setCartItems, showCartModal } = useCart();
  return (
    <div className="notfound">
      <h2 className="notfound__heading">
        Oops, Looks Like You've Discovered the Empty Aisle!
      </h2>
      <p className="notfound__text">
        Our team of expert shoppers searched high and low, but it seems this
        virtual shelf is bare. Don't worry, our real aisles are fully stocked
        with snacks and goodies waiting just for you! Feel free to click your
        way back to shopping paradise using the navigation links above.
      </p>

      <img
      className="notfound__image"
        src={Homer}
        alt="homer"
      />
      {showCartModal && (
        <CartModal cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </div>
  );
}

export default NotFound;

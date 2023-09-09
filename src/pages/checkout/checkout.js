import CartModal from "../../modals/cart/cartmodal";
import { useCart } from "../../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./checkout.css";

const Checkout = () => {
  const { cartItems, setCartItems, showCartModal } = useCart();
  const location = useLocation();
  const totalPrice = location.state.totalPrice;
  const navigate = useNavigate();
  const orderId = uuidv4();

  const handleContinue = () => {
    // Pass the order ID as a query parameter to the payment page
    navigate(`/payment?orderId=${orderId}`);
  };

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
          <button className="checkout__CTA--btn" onClick={handleContinue}>Continue</button>
      </div>

      {showCartModal && (
        <CartModal cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </section>
  );
};

export default Checkout;

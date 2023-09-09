import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cartmodal.css'; 



function CartModal({ cartItems }) {

  const navigate = useNavigate();

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0; 
    }
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const checkout = (cartItems) => {
    const totalPrice = calculateTotalPrice();
    console.log(totalPrice);
    navigate('/checkout', { state: { cartItems, totalPrice}});
  }
  

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <h3 className="cart-modal__title">Your Cart</h3>
        <ul className="cart-modal__list">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li className="cart-modal__item" key={index}>
                <span className="cart-modal__item-name">{item.productName}</span>
                <span className="cart-modal__item-price">${item.price}</span>
                <button className="cart-modal__item-button">+</button>
                <span className="cart-modal__item-quantity">quantity: {item.quantity}</span>
                <button className="cart-modal__item-button">-</button>
                <button className="cart-modal__item-button cart-modal__item-button--remove"> - </button>
              </li>
            ))
          ) : (
            <li className="cart-modal__empty">Your cart is empty</li>
          )}
        </ul>
        <p className="cart-modal__total">Total: ${calculateTotalPrice().toFixed(2)}</p>
        {cartItems && cartItems.length > 0 && (
        <button className="cart-modal__checkout-button" onClick={ () => {
          checkout(cartItems);
        }}>Checkout</button>
        )}
      </div>
    </div>
  );
}

export default CartModal;

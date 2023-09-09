import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartModal from "../../modals/cart/cartmodal";
import { useCart } from '../../context/CartContext';
import "./ProductList.css";

const ProductList = ({
  ProductData,
}) => {
  //const navigate = useNavigate();

  const { cartItems, setCartItems, showCartModal, toggleCartModal } = useCart();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [setCartItems]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
  const existingItemIndex = cartItems.findIndex(
    (item) => item.productID === product.productID
  );

  if (existingItemIndex !== -1) {
    // If the product is already in the cart, update its quantity
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].quantity++;
    setCartItems(updatedCartItems);
  } else {
    // If the product is not in the cart, add it as a new item
    const newItem = { ...product, quantity: 1 };
    setCartItems([...cartItems, newItem]);
  }

   //Store in localStorage for guest access
   localStorage.setItem("cart", JSON.stringify(cartItems));
      // Show the cart modal
    if (cartItems.length === 0) {
      toggleCartModal();
    }
  };

  return (
    <section className="product">
      {ProductData.map((product, id) => (
        <div className="product__card" key={id}>
          <div className="product__card-inner">
            <div className="product__card-inner--front">
              <div className="product__card-item">
                <img
                  className="product__card-item--image"
                  src={product.imageURL}
                  alt={product.productName}
                />
              </div>
              <div className="product__card--info">
                <h2>{product.productName}</h2>
                <h3>{product.price}</h3>
              </div>
            </div>

            <div className="product__card-inner--back">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <h2>Product Description</h2>
            </div>
          </div>
        </div>
      ))}

      {showCartModal && (
        <CartModal cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </section>
  );
};

export default ProductList;

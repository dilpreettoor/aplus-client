import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import redT from "../../assets/Images/redtshirt.jpg";
import "./ProductList.css";

const ProductList = ({ ProductData, setProductData }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(cartItems);
  };

  return (
    <section className="product">
      {ProductData.map((product) => (
        <div className="product__card">
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
                <button onClick={ ()=> addToCart(product)}>Add to Cart</button>
                <h2>Product Description</h2>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;

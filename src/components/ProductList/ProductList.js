import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import redT from "../../assets/Images/redtshirt.jpg";

const ProductList = ({ ProductData, setProductData }) => {
  const navigate = useNavigate();

  return (
    <section>
      {ProductData.map((product) => (
        <div className="product-card">
          <div className="product-image">
            <img src={product.imageURL} />
          </div>
          <div className="product-info">
            <h2>{product.productName}</h2>
            <h3>{product.price}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;

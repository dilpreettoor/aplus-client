import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { ApiUtils } from "../../utils";

const Products = () => {
  const [ProductData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    ApiUtils.getProductList()
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateProductData = (newData) => {
    setProductData(newData);
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <ProductList
      ProductData={ProductData}
      setProductData={updateProductData}
      cartItems={cartItems}
      setCartItems={setCartItems}
      showCartModal={showCartModal}
      toggleCartModal={toggleCartModal}
    />
  );
};

export default Products;

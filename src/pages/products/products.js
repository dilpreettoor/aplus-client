import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';

const Products = () => {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8083/products";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateProductData = (newData) => {
    setProductData(newData);
  };

  return (
    <ProductList ProductData={ProductData} setProductData={updateProductData} />
  );
};

export default Products;
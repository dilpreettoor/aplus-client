import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { ApiUtils } from '../../utils';

const Products = () => {
  const [ProductData, setProductData] = useState([]);

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

  return (
    <ProductList ProductData={ProductData} setProductData={updateProductData} />
  );
};

export default Products;
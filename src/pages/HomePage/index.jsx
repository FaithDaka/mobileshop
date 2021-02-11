import React, { useEffect, useState } from "react";

import Banner from './Banner'
import Promos from './Promos'
import ProductGroup from '../../components/ProductGroup'
import { getProducts, getProductsCount } from "../../functions/products";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  const loadAllProducts = () => {
    setLoading(true);
    getProducts("createdAt", "desc", page).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  return (
    <>
      <Banner />
      {/* <Promos /> */}
      <ProductGroup products={products} loading={loading} />
    </>
  )
}

export default HomePage

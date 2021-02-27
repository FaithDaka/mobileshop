import React, { useEffect, useState } from "react";

import Banner from './Banner'
import Promos from './Promos'
import ProductGroup from '../../components/ProductGroup'
import { getProducts } from "../../functions/products";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAllProducts = () => {
    setLoading(true);
    getProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProducts();
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

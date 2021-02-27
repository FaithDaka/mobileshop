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

//   console.clear();
//   console.log(products.length)

//   const prod_per_page= 3

//   const number_of_pages= Math.ceil(products.length /prod_per_page);

// var lastproductIndex= page * prod_per_page;
// console.log(lastproductIndex)
// var firstproductIndex = lastproductIndex - prod_per_page;
// console.log(firstproductIndex)
// var renderedProducts = products.slice(firstproductIndex, lastproductIndex);
// console.log(renderedProducts)

  return (
    <>
      <Banner />
      {/* <Promos /> */}
      <ProductGroup products={products} loading={loading} />
    
    </>
  )
}

export default HomePage

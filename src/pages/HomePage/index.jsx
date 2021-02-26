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

  console.clear();
  console.log(products.length)

  const prod_per_page= 3

  const number_of_pages= Math.ceil(products.length /prod_per_page);

var lastproductIndex= page * prod_per_page;
console.log(lastproductIndex)
var firstproductIndex = lastproductIndex - prod_per_page;
console.log(firstproductIndex)
var renderedProducts = products.slice(firstproductIndex, lastproductIndex);
console.log(renderedProducts)

  return (
    <>
      <Banner />
      {/* <Promos /> */}
        {
          renderedProducts?
          <ProductGroup products={products} loading={loading} />
          :
          <p>NULL</p>

        }
          
       
      {
        renderedProducts.forEach(element =>   <ProductGroup products={products} loading={loading}/>)
      }
    
    </>
  )
}

export default HomePage

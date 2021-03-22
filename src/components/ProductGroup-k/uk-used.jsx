/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Carousel from "../Carousel";
import Product from '../../components/Product'
import LoadSpinner from '../../components/Spinner'
import { getUkUsed } from "../../functions/products";

const UkUsed = () => {

  const [pageNumberNew, setPageNumberNew] = useState(0);
  const [pageNumberUsed, setPageNumberUsed] = useState(0);
  const [newtotalPages, setNewTotalPages] = useState(0);
  const [totalNew, setTotalNew] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBrandNew = () => {
    setLoading(true);
    getUkUsed(pageNumberNew).then((res) => {
      setProducts(res.data.products);
      setNewTotalPages(res.data.totalPages)
      setTotalNew(res.data.total);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadBrandNew();
  }, [pageNumberNew]);

  return (
    <Carousel title="Uk Used">
      {loading && <LoadSpinner />}
      {
        products.map(item => (
          <Product product={item} />
        ))}
    </Carousel>

  )
}

export default UkUsed

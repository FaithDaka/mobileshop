import React, { useState, useEffect } from 'react'
import Carousel from "../Carousel";
import Product from '../Product/product-slidder';
import { getBrandNew } from "../../functions/products";
import LoadSpinner from '../../components/Spinner';

const Slidder = () => {

  const [pageNumberNew, setPageNumberNew] = useState(0);
  const [pageNumberUsed, setPageNumberUsed] = useState(0);
  const [newtotalPages, setNewTotalPages] = useState(0);
  const [totalNew, setTotalNew] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBrandNew = () => {
    setLoading(true);
    getBrandNew(pageNumberNew).then((res) => {
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
    <Carousel title="Brand New">
      {loading && <LoadSpinner />}
      {
        products.map(item => (
          <Product product={item} />
        ))}
    </Carousel>

  )
}

export default Slidder;

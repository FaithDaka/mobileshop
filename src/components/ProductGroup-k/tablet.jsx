import React, { useState, useEffect } from 'react'
import Carousel from "../Carousel";
import Product from '../../components/Product'
import LoadSpinner from '../../components/Spinner'
import { getTablets } from "../../functions/products";

const Tablets = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const pages = new Array(totalPages).fill(null).map((v, i) => i);

    const goToPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1))
        window.scrollTo(0, 0)
    }

    const goToNext = () => {
        setPageNumber(Math.min(totalPages - 1, pageNumber + 1))
        window.scrollTo(0, 0)
    }

    const loadUkUsed = () => {
        setLoading(true);
        getTablets(pageNumber).then((res) => {
            setProducts(res.data.products);
            setTotalPages(res.data.totalPages)
            setTotal(res.data.total)
            setLoading(false);
        });
    };

    useEffect(() => {
        loadUkUsed();
        window.scrollTo(0, 0)
    }, [pageNumber]);

    return (
        <Carousel title="Tablets">
            {loading && <LoadSpinner />}
            {
                products.map(item => (
                    <Product product={item} />
                ))}
        </Carousel>
    )
}

export default Tablets
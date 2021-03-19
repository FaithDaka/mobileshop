import React, { useState, useEffect } from 'react';
import LoadSpinner from '../../components/Spinner';
import Carousel from "../Carousel";
import Accessory from '../../components/Product/accessory';
import { getAccessories } from "../../functions/accessory";

const Accessories = () => {
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
        getAccessories(pageNumber).then((res) => {
            setProducts(res.data.accessories);
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
        <Carousel title="Accessories">
            {loading && <LoadSpinner />}
            {
                products.map(item => (
                    <Accessory product={item} />
                ))}
        </Carousel>

    )
}

export default Accessories

import React, { useState, useEffect } from 'react'
import Product from '../../components/Product'
import LoadSpinner from '../../components/Spinner'
import { getLaptops } from "../../functions/products";

const LapTops = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const pages = new Array(totalPages).fill(null).map((v, i) => i);

    const goToPrevious = () => setPageNumber(Math.max(0, pageNumber - 1))
    const goToNext = () => setPageNumber(Math.min(totalPages - 1, pageNumber + 1))

    const loadUkUsed = () => {
        setLoading(true);
        getLaptops(pageNumber).then((res) => {
            setProducts(res.data.products);
            setTotalPages(res.data.totalPages)
            setLoading(false);
        });
    };

    useEffect(() => {
        loadUkUsed();
    }, [pageNumber]);

    return (
        <div>
            {loading && <LoadSpinner />}
            {
                products && products.length > 0 ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {products.map(product => (
                            <Product product={product} />
                        ))}
                    </div> :
                    <p>LapTops Currently Out of Stock</p>
            }

            <button onClick={goToPrevious}>Previous</button>
            {pages.map((pageIndex) => (
                <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</button>
            ))}
            <button onClick={goToNext}>Next</button>
            <h3>Page of {pageNumber + 1}</h3>
        </div>
    )
}

export default LapTops
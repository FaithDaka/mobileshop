/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Product from '../../components/Product'
import LoadSpinner from '../../components/Spinner'
import { getTelevisions } from "../../functions/products";

const Televisions = () => {
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
        getTelevisions(pageNumber).then((res) => {
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
        <div>
            {loading && <LoadSpinner />}
            {
                products && products.length > 0 ?
                    <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
                        {products.map(product => (
                            <Product product={product} />
                        ))}
                    </div> :
                    <p>Televisions Currently Out of Stock</p>
            }

            <div class="aiz-pagination">
                <nav className="text-center">
                    <span>Showing 1- 20 of {total} results</span>
                    <ul class="pagination d-flex justify-content-center">
                        <li class="page-item disabled" aria-label="« Previous" onClick={goToPrevious}>
                            <span class="page-link" aria-hidden="true">‹</span>
                        </li>
                        <li class="page-item d-flex">
                            {pages.map((pageIndex) => (
                                <a key={pageIndex} class="page-link" onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</a>
                            ))}

                        </li>
                        <li class="page-item" onClick={goToNext}>
                            <span class="page-link" aria-hidden="true">›</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Televisions
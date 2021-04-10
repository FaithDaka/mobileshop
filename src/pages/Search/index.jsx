import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Product from '../../components/Product';
import LoadSpinner from '../../components/Spinner';
import Browse from '../../components/Browser/Browse'
import Filters from './Filters';
import Pagination from '../../components/Pagination'
import { fetchProductsByFilter } from "../../functions/products";
import BottomFooter from '../../components/Layout/Footer/BottomFooter'
import PreOrder from "./preorder";

const SearchFilters = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [productsPerPage] = useState(20);
    const [currentpage, setCurrentPage] = useState(1);

    const lastProduct = currentpage * productsPerPage;
    const firstProduct = lastProduct - productsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const random = _.sampleSize(products, products.length);

    const currentProducts = random.slice(firstProduct, lastProduct);
    const totalProducts = random.length;

    let { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    const fetchProducts = (arg) => {
        setLoading(true)
        fetchProductsByFilter(arg).then((res) => {
            setProducts(res.data);
            setLoading(false)
        });
    };

    useEffect(() => {
        const delayed = setTimeout(() => {
            fetchProducts({ query: text });
        }, 300);
        return () => clearTimeout(delayed);
    }, [text]);

    return (
        <section class="pt-3">
            {loading && <LoadSpinner />}
            <div class="container sm-px-0">
                <form class="" id="search-form" action="" method="GET">
                    <div class="row">
                        <div class="col-xl-3">
                            <Filters />
                        </div>
                        <div class="col-xl-9">
                            <ul class="breadcrumb bg-transparent p-0">
                                <li class="breadcrumb-item opacity-50">
                                    <Link class="text-reset" to="/">Home</Link>
                                </li>
                                <li class="breadcrumb-item opacity-50">
                                    <a class="text-reset" href="#">All Categories</a>
                                </li>
                            </ul>
                            <div class="text-left">
                                <Browse />
                            </div>
                            <input type="hidden" name="min_price" value="" />
                            <input type="hidden" name="max_price" value="" />

                            {
                                products && products.length > 0 ?
                                    <div className="row gutters-5 row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-2">
                                        {currentProducts.map(item => (
                                            <Product product={item} />
                                        ))}
                                    </div> : <PreOrder />
                            }

                        </div>
                    </div>
                </form>
            </div>
            <Pagination
                paginate={paginate}
                totalProducts={totalProducts}
                productsPerPage={productsPerPage}
                currentpage={currentpage}
                firstProduct={firstProduct}
                currentProducts={currentProducts}
            />
            <BottomFooter />
        </section>
    )
}

export default SearchFilters

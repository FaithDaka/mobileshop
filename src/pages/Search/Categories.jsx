import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Product from '../../components/Product';
import LoadSpinner from '../../components/Spinner';
import Browse from '../../components/Browser/Browse'
import Pagination from '../../components/Pagination'
import { getProductBrands } from "../../functions/products";
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter'


const Categories = ({ match }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { slug } = match.params;

    useEffect(() => {
        setLoading(true);
        getProductBrands(slug).then((res) => {
            setProducts(res.data);
            setLoading(false);
        });
    }, [slug]);

    return (
        <section class="mb-4 pt-3">
            {loading && <LoadSpinner />}
            <div class="container sm-px-0">
                <form class="" id="search-form" action="" method="GET">
                    <div class="row">
                        <div class="col-xl-3 d-none d-lg-block">
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
                                products?
                                <div class="row gutters-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-2">
                                
                                {products && products.length > 0 ? products.map(item => (
                                    <Product product={item} />
                                )) : 'Fetching products...'}
                            </div>
                            :
                            <p>No Products in this Category Yet ??</p>
                            }

                            <Link to ='preorder'>Pre order</Link>

                        </div>
                    </div>
                </form>
            </div>
            <div className='d-none d-lg-block' style={{marginBottom:"-2%"}} >
            <Footer />
            <BottomFooter />
            </div>
        </section>
    )
}

export default Categories

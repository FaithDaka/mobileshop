import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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

                            <section>
                                <ul class="breadcrumb bg-transparent p-0">
                                    <li class="breadcrumb-item opacity-50 fs-16">
                                        Filters
                                </li>

                                </ul>

                                <section className="shadow-lg p-3 mb-5 bg-white rounded">



                                    <section class="border-bottom mb-4 pb-3 pt-2">

                                        <h6 class="font-weight-bold mb-3">Condition</h6>

                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input filled-in" id="new" />
                                            <label class="form-check-label  text-uppercase card-link-secondary" for="new">New</label>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input filled-in" id="used" />
                                            <label class="form-check-label  text-uppercase card-link-secondary" for="used">UK Used</label>
                                        </div>


                                    </section>


                                    <section class="border-bottom mb-4">

                                        <h6 class="font-weight-bold mb-3">Price</h6>

                                        <div class="slider-price d-flex align-items-center my-4">
                                            <span class="font-weight-normal  text-muted mr-2">$0</span>
                                            <form class="multi-range-field w-100 mb-1">
                                                <input id="multi" class="multi-range" type="range" />
                                            </form>
                                            <span class="font-weight-normal  text-muted ml-2">$100</span>
                                        </div>
                                        <div class="d-flex align-items-center mt-4 pb-1">
                                            <div class="md-form md-outline my-0">
                                                <input id="from" type="text" class="form-control mb-0" />
                                                <label for="form">$ Min</label>
                                            </div>
                                            <p class="px-2 mb-0 text-muted"> - </p>
                                            <div class="md-form md-outline my-0">
                                                <input id="to" type="text" class="form-control mb-0" />
                                                <label for="to">$ Max</label>
                                            </div>
                                        </div>

                                    </section>

                                    <section class="border-bottom mb-4">

                                        <h6 class="font-weight-bold mb-3">Product</h6>

                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input filled-in" id="34" />
                                            <label class="form-check-label  text-uppercase card-link-secondary" for="34">Phones</label>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input filled-in" id="36" />
                                            <label class="form-check-label  text-uppercase card-link-secondary" for="36">Television</label>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input filled-in" id="38" />
                                            <label class="form-check-label text-uppercase card-link-secondary" for="38">Laptop</label>
                                        </div>


                                    </section>

                                    <section class="border-bottom mb-4">

                                        <h6 class="font-weight-bold mb-3">Color</h6>

                                        <div class="btn-group btn-group-toggle btn-color-group d-block mt-n2 ml-n2" data-toggle="buttons">
                                            <label class="btn rounded-circle white border-inset-red p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle grey p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle black p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle green p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle blue p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle purple p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle yellow p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle indigo p-3 m-2">
                                                <input type="checkbox" checked autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle red p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                            <label class="btn rounded-circle orange p-3 m-2">
                                                <input type="checkbox" autocomplete="off" />
                                            </label>
                                        </div>

                                    </section>

                                    <button type="button" class="btn btn-soft-primary add-to-cart fw-600 align-self-center" style={{ whiteSpace: "nowrap" }}>
                                        <span class="d-md-inline-block"> Apply</span>
                                    </button>
                                </section>


                            </section>

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

                            <div class="row gutters-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-2">
                                {products && products.length > 0 ? products.map(item => (
                                    <Product product={item} />
                                )) : 'No Products in this Category Yet ??'}
                            </div>

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

import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from 'react-router-dom';
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSpecs from "./ProductSpecs";
import LoadSpinner from '../../components/Spinner';
import { getProduct, getRelated } from "../../functions/products";
import './sticky.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = ({ match }) => {
    let productId = match.params.id;

    const [product, setProduct] = useState({});
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadSingleProduct = () => {
        setLoading(true)
        getProduct(productId).then((res) => {
            setProduct(res.data)
            getRelated(res.data._id).then((res) => setRelated(res.data));
            setLoading(false);
        })
    }


    useEffect(() => {
        loadSingleProduct();
    }, [productId]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>

            <section class="mb-4 pt-3" >

                <div class="container">
                    {loading && <LoadSpinner />}
                    <div class="col">
                        <ul class="breadcrumb bg-transparent p-0 justify-content-lg-end">
                            <li class="breadcrumb-item opacity-50">
                                <Link class="text-reset" to="/">Home</Link>
                            </li>
                            <li class="text-dark fw-600 breadcrumb-item">
                                <Link class="text-reset" to="/">{product.category ? product.category.name : ''}</Link>
                            </li>
                            <li class="text-dark fw-600 breadcrumb-item">
                                <Link class="text-reset" to="/">{product.subs ? product.subs.name : ''}</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-white shadow-sm rounded p-3">
                        <div class="row">
                            <div class="col-xl-5 col-lg-6 mb-3">
                                <ProductImage product={product} />
                            </div>

                            <div class="col-xl-7 col-lg-6">
                                <ProductInfo product={product} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProductSpecs product={product} related={related} />
        </>
    )
}

export default ProductDetails;

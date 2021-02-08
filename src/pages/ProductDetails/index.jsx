import React, { useEffect, useState } from "react";
import _ from "lodash";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSpecs from "./ProductSpecs";
import Thumbnails from "./thumbnails";

import { getProduct, getRelated } from "../../functions/products";
import LoadSpinner from '../../components/Spinner';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = ({ match, history }) => {
    let productId = match.params.id;

    const [product, setProduct] = useState({});
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pricestorage, setPriceStorage] = useState();
    
    const SelectPrice = (e) => {
        setPriceStorage(e.target.value)
    }

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

    console.log("product details", product)
    console.log("related details", related)
    return(
    <>
        <section class="mb-4 pt-3">
            <div class="container">
            {loading && <LoadSpinner />}
                <div class="bg-white shadow-sm rounded p-3">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6 mb-4">
                            <ProductImage product={product} />
                            <Thumbnails product={product} />
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
)}

export default ProductDetails;

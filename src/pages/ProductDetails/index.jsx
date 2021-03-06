import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSpecs from "./ProductSpecs";
import LoadSpinner from '../../components/Spinner';
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter'
import Shipping from './shipping'
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
        <Helmet>
                <title>Product Details</title>
                <meta name="description" content="MobileShop Product Details" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-193008384-1">
                </script>
                <script>
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-193008384-1');
        `}
                </script>
            </Helmet>
            <section class="mb-4 mt-4 pt-3">
                <div class="container"> 
                    {loading && <LoadSpinner />}
                    <div class="col" id="pd-top-links">
                        <ul class="breadcrumb bg-transparent p-0 justify-content-lg-start">
                            <li class="breadcrumb-item" style={{color:"#f90"}}>
                                <Link class="text-reset" to="/">Home  <span className="text-dark"> &gt;&gt;</span></Link>
                            </li>
                            <li class="fw-600" style={{color:"#f90"}}>
                                <Link class="text-reset" to="#">{product.category ? product.category.name : ''}<span className="text-dark"> &gt;&gt;</span></Link>
                            </li>
                            <li class="fw-600 " style={{color:"#f90"}}>
                                <Link class="text-reset" to= {product.subs ? `/products/${product.subs.name}`: '#'}>{product.subs ? product.subs.name : ''}<span className="text-dark"> &gt;&gt;</span></Link>
                            </li>
                            <li class="fw-600 elipsis " >
                                <Link class="text-reset" to="#">{product.title ? product.title : ''}</Link>
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
            <Shipping/>
         
            <ProductSpecs product={product} related={related} />
            
            <div class="d-none d-lg-block">
                <Footer/>
                <BottomFooter/>
            </div>
               
            <div className=" d-md-none extra">
                <p style={{visibility:"hidden"}}>MobileShop.ug</p>
            </div>
          
        </>
    )
}

export default ProductDetails;

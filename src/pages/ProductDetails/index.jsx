/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSpecs from "./ProductSpecs";
import Thumbnails from "./thumbnails";

const ProductDetails = () => (
    <>
        <section class="mb-4 pt-3">
            <div class="container">
                <div class="bg-white shadow-sm rounded p-3">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6 mb-4">
                            <ProductImage />
                            <Thumbnails />
                        </div>

                        <div class="col-xl-7 col-lg-6">
                            <ProductInfo />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ProductSpecs />
    </>
);

export default ProductDetails;

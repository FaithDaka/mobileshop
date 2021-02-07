/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => (
  <div className="col mb-3">
    <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md h-100 has-transition bg-white">
      <div className="position-relative">
        <Link to="/product" className="d-block text-center pt-3">
          <img className="mx-auto h-160px h-sm-200px h-md-220px h-xl-270px lazyloaded" src={props.image} alt="productpicture" />
        </Link>
        <div className="absolute-top-left pt-2 pl-2">
          <span className="badge badge-inline badge-danger">UK Used</span>
        </div>
        {/* <div className="absolute-top-left pt-2 pl-2">
          <span className="badge badge-inline badge-success">new</span>
        </div> */}
        <div className="absolute-top-right aiz-p-hov-icon">
          <a href="#" onClick="addToWishList(188)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left" data-original-title="" title="">
            <a className="la la-heart-o" />
          </a>
          <a href="#" onClick="addToCompare(188)" data-toggle="tooltip" data-title="Add to compare" data-placement="left">
            <a className="las la-sync" />
          </a>
          <a href="#" onClick="showAddToCartModal(188)" data-toggle="tooltip" data-title="Add to cart" data-placement="left">
            <a className="las la-shopping-cart" />
          </a>
        </div>
      </div>
      <div className="p-md-3 p-2 text-left">
        <div className="fs-15">
          <span className="fw-600 text-reset">UGX 2,000,000</span>
          <del className="d-block opacity-70">UGX 3,000,000</del>
        </div>
        <div className="rating rating-sm mt-1">
          <i className="las la-star active" />
          <i className="las la-star active" />
          <i className="las la-star active" />
          <i className="las la-star active" />
          <i className="las la-star active" />
        </div>
        <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
          <a href="#" className="d-block text-reset fw-500">Apple iPhone 12</a>
        </h3>
        <div className="mt-3" style={{
          display: "flex", position: "relative",
          alignItems: "center",
          transition: "all .35s ease",
          paddingBottom: "5px"
        }}>
          <button type="button" className="btn btn-product-cart" onClick="addToCart()">
            <span className="btn-cart">Add Cart</span>
          </button>
          <button type="button" className=" btn btn-product-call" onClick="buyNow()">
              <a href="tel:0751290264">
                <i class="las la-phone la-2x btn-call"></i>
              </a>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Product

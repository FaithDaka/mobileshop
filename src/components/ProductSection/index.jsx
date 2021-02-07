/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
/* eslint-disable max-len */
import React from 'react'

const ProductSection = () => (
  <div id="section_featured">
    <section className="mb-4">
      <div className="container">
        <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
          <div className="d-flex mb-3 align-items-baseline border-bottom">
            <h3 className="h5 fw-700 mb-0">
              <span className="border-bottom border-primary border-width-2 pb-3 d-inline-block">Featured Products</span>
            </h3>
          </div>
          <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items="6" data-xl-items="5" data-lg-items="4" data-md-items="3" data-sm-items="2" data-xs-items="2" data-arrows="true" data-infinite="true">
            <button type="button" className="slick-prev slick-arrow"><i className="las la-angle-left" /></button>
            <div className="slick-list draggable">
              <div className="slick-track" style={{opacity: '1', width: '6293px', transform: 'translate3d(-1085px, 0px, 0px)'}}>

                <div className="slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" style={{width: '217px'}} tabIndex="-1">
                  <div>
                    <div className="carousel-box" style={{width: '100%', display: 'inline-block'}}>
                      <div className="aiz-card-box border border-light rounded hov-shadow-md my-2 has-transition">
                        <div className="position-relative">
                          <a href="#" className="d-block" tabIndex="-1">
                            <img className="img-fit lazyload mx-auto h-140px h-md-210px" src="images/phones/1612431654138-apple4.jpeg" />
                          </a>
                          <div className="absolute-top-right aiz-p-hov-icon">
                            <a href="javascript:void(0)" onClick="addToWishList(201)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left" tabIndex="-1">
                              <i className="la la-heart-o" />
                            </a>
                            <a href="javascript:void(0)" onClick="addToCompare(201)" data-toggle="tooltip" data-title="Add to compare" data-placement="left" tabIndex="-1">
                              <i className="las la-sync" />
                            </a>
                            <a href="javascript:void(0)" onClick="showAddToCartModal(201)" data-toggle="tooltip" data-title="Add to cart" data-placement="left" tabIndex="-1">
                              <i className="las la-shopping-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="p-md-3 p-2 text-left">
                          <div className="fs-15">
                            <span className="fw-700 text-primary">$25.00</span>
                          </div>
                          <div className="rating rating-sm mt-1">
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                          </div>
                          <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                            <a href="https://demo.activeitzone.com/ecommerce/product/little-girls-blush-sparkle-sequin-lace-overlay-elegant-flower-girl-dress-fz2xx" className="d-block text-reset" tabIndex="-1">Little Girls Blush Sparkle Sequin Lace Overlay Elegant Flower Girl Dress</a>
                          </h3>
                          <div className="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                            Club Point:
                            <span className="fw-700 float-right">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               

                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '217px'}}>
                  <div>
                    <div className="carousel-box" style={{width: '100%', display: 'inline-block'}}>
                      <div className="aiz-card-box border border-light rounded hov-shadow-md my-2 has-transition">
                        <div className="position-relative">
                          <a href="#" className="d-block" tabIndex="0">
                            <img className="img-fit mx-auto h-140px h-md-210px lazyloaded" src="images/phones/1612431654140-apple5.jpeg" data-src="images/phones/1612431654140-apple5.jpeg" alt="Long Sleeve Turtleneck Dress" />
                          </a>
                          <div className="absolute-top-right aiz-p-hov-icon">
                            <a href="javascript:void(0)" onClick="addToWishList(208)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left" tabIndex="0">
                              <i className="la la-heart-o" />
                            </a>
                            <a href="javascript:void(0)" onClick="addToCompare(208)" data-toggle="tooltip" data-title="Add to compare" data-placement="left" tabIndex="0">
                              <i className="las la-sync" />
                            </a>
                            <a href="javascript:void(0)" onClick="showAddToCartModal(208)" data-toggle="tooltip" data-title="Add to cart" data-placement="left" tabIndex="0">
                              <i className="las la-shopping-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="p-md-3 p-2 text-left">
                          <div className="fs-15">
                            <span className="fw-700 text-primary">$250.00</span>
                          </div>
                          <div className="rating rating-sm mt-1">
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                          </div>
                          <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                            <a href="" className="d-block text-reset" tabIndex="0">Mud Pie Women's Long Sleeve Turtleneck Dress</a>
                          </h3>
                          <div className="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                            Club Point:
                            <span className="fw-700 float-right">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{width: '217px'}}>
                  <div>
                    <div className="carousel-box" style={{width: '100%', display: 'inline-block'}}>
                      <div className="aiz-card-box border border-light rounded hov-shadow-md my-2 has-transition">
                        <div className="position-relative">
                          <a href="#" className="d-block" tabIndex="0">
                            <img className="img-fit mx-auto h-140px h-md-210px lazyloaded" src="images/phones/1612433148873-Phone1.jpeg" data-src="images/phones/1612433148873-Phone1.jpeg" alt="Fashion korean " />
                          </a>
                          <div className="absolute-top-right aiz-p-hov-icon">
                            <a href="javascript:void(0)" onClick="addToWishList(207)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left" tabIndex="0">
                              <i className="la la-heart-o" />
                            </a>
                            <a href="javascript:void(0)" onClick="addToCompare(207)" data-toggle="tooltip" data-title="Add to compare" data-placement="left" tabIndex="0">
                              <i className="las la-sync" />
                            </a>
                            <a href="javascript:void(0)" onClick="showAddToCartModal(207)" data-toggle="tooltip" data-title="Add to cart" data-placement="left" tabIndex="0">
                              <i className="las la-shopping-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="p-md-3 p-2 text-left">
                          <div className="fs-15">
                            <span className="fw-700 text-primary">$35.00</span>
                          </div>
                          <div className="rating rating-sm mt-1">
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                          </div>
                          <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                            <a href="https://demo.activeitzone.com/ecommerce/product/Fashion-korean-bear-decoration-ladies-bag-handbags-sets-4-in-1-for-women-FYhbv" className="d-block text-reset" tabIndex="0">Fashion korean bear decoration ladies bag handbags sets 4 in 1 for women</a>
                          </h3>
                          <div className="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                            Club Point:
                            <span className="fw-700 float-right">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              
              
                <div className="slick-slide" data-slick-index="5" aria-hidden="true" style={{width: '217px'}} tabIndex="-1">
                  <div>
                    <div className="carousel-box" style={{width: '100%', display: 'inline-block'}}>
                      <div className="aiz-card-box border border-light rounded hov-shadow-md my-2 has-transition">
                        <div className="position-relative">
                          <a href="https://demo.activeitzone.com/ecommerce/product/Hot-sales-sleeveless-sexy-for-night-club-party-sliver-sequin-dresses-women-m7dMq" className="d-block" tabIndex="-1">
                            <img className="img-fit mx-auto h-140px h-md-210px lazyloaded" src="images/phones/1612434188404-apple-12-a.jpeg" data-src="" alt="Hot sales " />
                          </a>
                          <div className="absolute-top-right aiz-p-hov-icon">
                            <a href="javascript:void(0)" onClick="addToWishList(203)" data-toggle="tooltip" data-title="Add to wishlist" data-placement="left" tabIndex="-1">
                              <i className="la la-heart-o" />
                            </a>
                            <a href="javascript:void(0)" onClick="addToCompare(203)" data-toggle="tooltip" data-title="Add to compare" data-placement="left" tabIndex="-1">
                              <i className="las la-sync" />
                            </a>
                            <a href="javascript:void(0)" onClick="showAddToCartModal(203)" data-toggle="tooltip" data-title="Add to cart" data-placement="left" tabIndex="-1">
                              <i className="las la-shopping-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="p-md-3 p-2 text-left">
                          <div className="fs-15">
                            <span className="fw-700 text-primary">$120.00</span>
                          </div>
                          <div className="rating rating-sm mt-1">
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                            <i className="las la-star" />
                          </div>
                          <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                            <a href="https://demo.activeitzone.com/ecommerce/product/Hot-sales-sleeveless-sexy-for-night-club-party-sliver-sequin-dresses-women-m7dMq" className="d-block text-reset" tabIndex="-1">Hot sales sleeveless sexy for night club party sliver sequin dresses women</a>
                          </h3>
                          <div className="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
                            Club Point:
                            <span className="fw-700 float-right">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                
              </div>
            </div>
            <button type="button" className="slick-next slick-arrow"><i className="las la-angle-right" /></button>
          </div>
        </div>
      </div>       
    </section>
  </div>
    )

export default ProductSection

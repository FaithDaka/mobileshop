import React from 'react'

const RelatedProducts = () => {
    return (
        <div className="bg-white rounded shadow-sm">
            <div className="border-bottom p-3">
              <h3 className="fs-16 fw-600 mb-0">
                <span className="mr-4">Related products</span>
              </h3>
            </div>
            <div className="p-3">
              <div className="aiz-carousel gutters-5 half-outside-arrow slick-initialized slick-slider" data-items="5" data-xl-items="3" data-lg-items="4" data-md-items="3" data-sm-items="2" data-xs-items="2" data-arrows="true" data-infinite="true">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{opacity: '1', width: '269px', transform: 'translate3d(0px, 0px, 0px)'}}>
                          <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '269px'}}>
                              <div>
                                  <div className="carousel-box" style={{width: '100%', display: 'inline-block'}}>
                                      <div className="aiz-card-box border border-light rounded hov-shadow-md my-2 has-transition">
                                          <div className="">
                                              <a href="https://demo.activeitzone.com/ecommerce/product/iphone-8-plus-64gb128gb256gb-1920-by-1080-pixel-resolution-qutzp" className="d-block" tabIndex="0">
        <img className="img-fit mx-auto h-140px h-md-210px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/OS7hvXgJaQcEGwVLE8Zz87FZeWjedB1rRTxGOJGV.jpeg" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/OS7hvXgJaQcEGwVLE8Zz87FZeWjedB1rRTxGOJGV.jpeg" alt="iPhone 8 Plus" />
      </a>
                                            </div>
                                          <div className="p-md-3 p-2 text-left">
                                              <div className="fs-15">
        <span className="fw-700 text-primary">$699.00</span>
      </div>
                                              <div className="rating rating-sm mt-1">
        <i className="las la-star" />
        <i className="las la-star" />
        <i className="las la-star" />
        <i className="las la-star" />
        <i className="las la-star" />
      </div>
                                              <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
        <a href="https://demo.activeitzone.com/ecommerce/product/iphone-8-plus-64gb128gb256gb-1920-by-1080-pixel-resolution-qutzp" className="d-block text-reset" tabIndex="0">iPhone 8 Plus (64GB/128GB/256GB) 1920-by-1080-pixel resolution</a>
      </h3>
                                              <div className="rounded px-2 mt-2 bg-soft-primary border-soft-primary border">
        Club Point:
                                                    <span className="fw-700 float-right">699</span>
      </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default RelatedProducts

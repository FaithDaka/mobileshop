/* eslint-disable max-len */
import React from 'react'

const TopDeals = () => (
  <div className="col-lg-2 order-3 mt-3 mt-lg-0">
    <div className="bg-white rounded shadow-sm">
      <div className="bg-soft-primary rounded-top p-3 d-flex align-items-center justify-content-center">
        <span className="fw-600 fs-16 mr-2 text-truncate">
          Todays Hot Deals
        </span>
        <span className="badge badge-primary badge-inline">Hot</span>
      </div>
      <div className="c-scrollbar-light overflow-auto h-lg-400px p-2 bg-primary rounded-bottom">
        <div className="gutters-5 lg-no-gutters row row-cols-2 row-cols-lg-1">
          <div className="col mb-2">
            <a href="#" className="d-block p-2 text-reset bg-white h-100 rounded">
              <div className="row gutters-5 align-items-center text-center">
                <div className="col-lg">
                  <div className="img">
                    <img className="h-140px h-lg-80px lazyloaded" src="/images/phones/Haw20.jpg"  alt="Apple iPhone 12" />
                  </div>
                </div>
                <div className="col-lg">
                  <div className="fs-16">
                    <span className="d-block fw-600 text-reset">UGX 1,000,0000</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col mb-2">
            <a href="#" className="d-block p-2 text-reset bg-white h-100 rounded">
              <div className="row gutters-5 align-items-center text-center">
                <div className="col-lg">
                  <div className="img">
                    <img className="h-140px h-lg-80px lazyloaded" src="images/phones/Hawe1.jpg" alt="Pieces Black Elegant" />
                  </div>
                </div>
                <div className="col-lg">
                  <div className="fs-16">
                    <span className="d-block fw-600 text-reset">UGX 1,000,0000</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col mb-2">
            <a href="#" className="d-block p-2 text-reset bg-white h-100 rounded">
              <div className="row gutters-5 align-items-center text-center">
                <div className="col-lg">
                  <div className="img">
                    <img className="h-140px h-lg-80px lazyloaded" src="images/phones/Sam1.jpg"  />
                  </div>
                </div>
                <div className="col-lg">
                  <div className="fs-16">
                    <span className="d-block fw-600 text-reset">UGX 1,000,0000</span>
                  </div>
                </div>
              </div>
            </a>
          </div>


          <div className="col mb-2">
            <a href="#" className="d-block p-2 text-reset bg-white h-100 rounded">
              <div className="row gutters-5 align-items-center text-center">
                <div className="col-lg">
                  <div className="img">
                    <img className="lazyload h-140px h-lg-80px" src="images/phones/Haw1.jpg"  alt="summer rose Party " />
                  </div>
                </div>
                <div className="col-lg">
                  <div className="fs-16">
                    <span className="d-block fw-600 text-reset">UGX 1,000,0000</span>
                    <del className="d-block opacity-70 fw-600 text-reset">UGX 1,500,0000</del>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    )

export default TopDeals

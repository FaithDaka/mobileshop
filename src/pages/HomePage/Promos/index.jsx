/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react'
import pic1 from "./sales4.jpeg";
import pic2 from "./sale2.jpeg";
import pic3 from "./sale3.jpeg";

const Categories = () => (
  <div className="mb-4">
    <div className="container">
      <div className="row gutters-10">
        <div className="col-xl col-md-6">
          <div className="mb-3 mb-lg-0">
            <a href="#" className="d-block text-reset">
              <img src={pic1} alt="Active eCommerce CMS promo" className="img-fluid lazyloaded" />
            </a>
          </div>
        </div>
        <div className="d-none d-lg-block col-xl col-md-6">
          <div className="mb-3 mb-lg-0">
            <a href="#" className="d-block text-reset">
              <img src={pic2} alt="Active eCommerce CMS promo" className="img-fluid lazyloaded" />
            </a>
            
          </div>
        </div>
        <div className="d-none d-lg-block col-xl col-md-6">
          <div className="mb-3 mb-lg-0">
            <a href="#" className="d-block text-reset">
              <img src={pic3} alt="Active eCommerce CMS promo" className="img-fluid lazyloaded" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    )

export default Categories

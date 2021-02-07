import React from 'react';
import RelatedAccessories from './RelatedAccessories';
import RelatedProducts from './RelatedProducts';
import Specs from './Specs';

const ProductSpecs = () => (
  <section className="mb-4">
    <div className="container">
      <div className="row gutters-10">
        <div className="col-xl-3 order-1 order-xl-0">
          <div className="bg-white shadow-sm mb-3">
            <div className="position-relative p-3 text-left">
              <div className="opacity-50 fs-12 border-bottom">Sold by</div>
              <div className="fw-600">MobileShop Uganda</div>

              <div className="text-center border rounded p-2 mt-3">
                <div className="rating">
                  <i className="las la-star active" />
                  <i className="las la-star active" />
                  <i className="las la-star active" />
                  <i className="las la-star active" />
                  <i className="las la-star half" />
                </div>
                <div className="opacity-60 fs-12">(Ratings)</div>
              </div>
            </div>
          </div>
          <RelatedAccessories />
        </div>
        <div className="col-xl-9 order-0 order-xl-1">
          <Specs />
          <RelatedProducts />
        </div>
      </div>
    </div>
  </section>
);

export default ProductSpecs;

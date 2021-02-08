import React from 'react'

const RelatedAccessories = () => {
  return (
    <div className="bg-white rounded shadow-sm mb-3">
      <div className="p-3 border-bottom fs-16 fw-600">
        Related Accessories
            </div>
      <div className="p-3">
        <ul className="list-group list-group-flush">
          <li className="py-3 px-0 list-group-item border-light">
            <div className="row gutters-10 align-items-center">
              <div className="col-5">
                <a href="#" className="d-block text-reset">
                  <img className="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/kQdd5XqAuLh1EmSsAP5Zih3CShYuwRub87L9sCiU.jpg" alt="Apple Macbook Pro" />
                </a>
              </div>
              <div className="col-7 text-left">
                <h4 className="fs-13 text-truncate-2">
                  <a href="#" className="d-block text-reset">Apple Macbook Pro (2018) Six Core Intel Core i7 (2.2-4.1GHz, 16GB 2400MHz DDR4</a>
                </h4>
                <div className="rating rating-sm mt-1">
                  <i className="las la-star" />
                  <i className="las la-star" />
                  <i className="las la-star" />
                  <i className="las la-star" />
                  <i className="las la-star" />
                </div>
                <div className="mt-2">
                  <span className="fs-17 fw-600 text-primary">UGX 1,500,000</span>
                </div>
              </div>
            </div>
          </li>
          <li className="py-3 px-0 list-group-item border-light">
            <div className="row gutters-10 align-items-center">
              <div className="col-5">
                <a href="#" className="d-block text-reset">
                  <img className="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/IS5KY5GN8l9VhTCUb64y5CrrJln7WLRmZDHorOLs.jpeg" />
                </a>
              </div>
              <div className="col-7 text-left">
                <h4 className="fs-13 text-truncate-2">
                  <a href="#">HP Spectre x360 13-AE517TU 8th Gen Intel Core i7 8550U</a>
                </h4>
                <div className="rating rating-sm mt-1">
                  <i className="las la-star active" />
                  <i className="las la-star active" />
                  <i className="las la-star active" />
                  <i className="las la-star active" />
                  <i className="las la-star active" />
                </div>
                <div className="mt-2">
                  <span className="fs-17 fw-600 text-primary">UGX 2,000,000</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RelatedAccessories

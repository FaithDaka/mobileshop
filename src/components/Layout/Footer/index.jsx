/* eslint-disable max-len */
import React from 'react'

const Footer = () => (
  <section className="bg-dark py-5 text-light d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xl-4 text-center text-md-left">
          <div className="mt-4">
            <a href="https://demo.activeitzone.com/ecommerce" className="d-block">
              <img className=" ls-is-cached lazyloaded" src="images/logo.png" alt="MobileShop Logo" height="44" />
            </a>
            <div className="my-3">
              <span className="ld-fh-txt">MobileShopUg is an African e-commerce company currently operating in Uganda. Our head office is located in the capital city of Kampala - Uganda on kampala road plaza.</span>                    
            </div>
            <div className="d-inline-block d-md-block">
              {/* <form class="form-inline" method="POST" action="https://demo.activeitzone.com/ecommerce/subscribers">
                            <input type="hidden" name="_token" value="vbe0XjyB2Y0iwfSdZKC7OF33baVmgFU288VfaOks"/>                            <div class="form-group mb-0"/>
                                <input type="email" class="form-control" placeholder="Your Email Address" name="email" required=""/>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Subscribe
                            </button>
                        </form> */}
            </div>
          </div>
        </div>
        <div className="col-lg-3 ml-xl-auto col-md-4 mr-0">
          <div className="text-center text-md-left mt-4">
            <h4 className="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4">
              Contact Info
            </h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="d-block opacity-30">Address:</span>
                <span className="d-block opacity-70">Demo Address</span>
              </li>
              <li className="mb-2">
                <span className="d-block opacity-30">Phone:</span>
                <span className="d-block opacity-70">0123456789</span>
              </li>
              <li className="mb-2">
                <span className="d-block opacity-30">Email:</span>
                <span className="d-block opacity-70">
                  <a href="mailto:demo@example.com" className="text-reset">demo@example.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="text-center text-md-left mt-4">
            <h4 className="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4">
              Our Offices
            </h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://nyc.com" className="opacity-50 hov-opacity-100 text-reset">
                  NY Office
                </a>
              </li>
              <li className="mb-2">
                <a href="https://london.com" className="opacity-50 hov-opacity-100 text-reset">
                  London Office
                </a>
              </li>
              <li className="mb-2">
                <a href="https://sydney.com" className="opacity-50 hov-opacity-100 text-reset">
                  Sydney Office
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-4 col-lg-2">
          <div className="text-center text-md-left mt-4">
            <h4 className="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4">
              My Account
            </h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a className="opacity-50 hov-opacity-100 text-reset" href="https://demo.activeitzone.com/ecommerce/users/login">
                  Login
                </a>
              </li>
              <li className="mb-2">
                <a className="opacity-50 hov-opacity-100 text-reset" href="https://demo.activeitzone.com/ecommerce/purchase_history">
                  Order History
                </a>
              </li>
              <li className="mb-2">
                <a className="opacity-50 hov-opacity-100 text-reset" href="https://demo.activeitzone.com/ecommerce/wishlists">
                  My Wishlist
                </a>
              </li>
              <li className="mb-2">
                <a className="opacity-50 hov-opacity-100 text-reset" href="https://demo.activeitzone.com/ecommerce/track_your_order">
                  Track Order
                </a>
              </li>
              <li className="mb-2">
                <a className="opacity-50 hov-opacity-100 text-light" href="https://demo.activeitzone.com/ecommerce/affiliate">Be an affiliate partner</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    )

export default Footer

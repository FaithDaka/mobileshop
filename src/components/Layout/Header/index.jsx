/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  let { cart } = useSelector((state) => ({ ...state }));

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count * nextValue.price;
    }, 0);
};

return(
  <>
  <header className="d-none d-lg-block sticky-top  z-1020 border-bottom shadow-sm" style={{background: '#101622'}}>
    <div className="position-relative logo-bar-area">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="col-auto col-xl-3 pl-0 pr-3 d-flex align-items-center">
            <a
              className="d-block py-20px mr-3 ml-0"
              href="#"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="Logo"
                width={80}
              />
            </a>
          </div>
          <div className="d-lg-none ml-auto mr-0">
            <a
              className="p-2 d-block text-reset"
              href="#"
              data-toggle="class-toggle"
              data-target=".front-header-search"
            >
              <i className="las la-search la-flip-horizontal la-2x" />
            </a>
          </div>

          <div className="flex-grow-1 front-header-search d-flex align-items-center bg-white">
            <div className="position-relative flex-grow-1">
              <form>
                <div className="d-flex position-relative align-items-center">
                  <div
                    className="d-lg-none"
                    data-toggle="class-toggle"
                    data-target=".front-header-search"
                  >
                    <button className="btn px-2" type="button">
                      <i className="la la-2x la-long-arrow-left" />
                    </button>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="border-0 border-lg form-control"
                      id="search"
                      name="q"
                      placeholder="I am shopping for..."
                      autoComplete="off"
                    />
                    <div className="input-group-append d-lg-block">
                      <button className="btn btn-primary" type="submit">
                        <i className="la la-search la-flip-horizontal fs-18" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div
                className="typed-search-box stop-propagation document-click-d-none d-none bg-white rounded shadow-lg position-absolute left-0 top-100 w-100"
                style={{ minHeight: "200px" }}
              >
                <div className="search-preloader absolute-top-center">
                  <div className="dot-loader">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
                <div className="search-nothing d-none p-3 text-center fs-16" />
                <div id="search-content" className="text-left" />
              </div>
            </div>
          </div>

          <div className="d-none d-lg-none ml-3 mr-0">
            <div className="nav-search-box">
              <a href="#" className="nav-box-link">
                <i className="la la-search la-flip-horizontal d-inline-block nav-box-icon" />
              </a>
            </div>
          </div>

          <div className="d-none d-lg-block ml-3 mr-0 text-white">
            <div className="" id="compare">
              <a href="#" className="d-flex align-items-center text-reset">
                <i className="la la-refresh la-2x opacity-80" />
                <span className="flex-grow-1 ml-1">
                  <span className="badge badge-primary badge-inline badge-pill">
                    0
                  </span>
                  <span className="nav-box-text d-none d-xl-block opacity-70">
                    Compare
                  </span>
                </span>
              </a>
              {" "}
            </div>
          </div>

          <div className="d-none d-lg-block ml-3 mr-0 text-white">
            <div className="" id="wishlist">
              <a href="#" className="d-flex align-items-center text-reset">
                <i className="la la-heart-o la-2x opacity-80" />
                <span className="flex-grow-1 ml-1">
                  <span className="badge badge-primary badge-inline badge-pill">
                    0
                  </span>
                  <span className="nav-box-text d-none d-xl-block opacity-70">
                    Wishlist
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div
            className="d-none d-lg-block  align-self-stretch ml-3 mr-0 text-white"
            data-hover="dropdown"
          >
            <div className="nav-cart-box dropdown h-100 show" id="cart_items">
              <a
                href="#"
                className="d-flex align-items-center text-reset h-100"
                data-toggle="dropdown"
                data-display="static"
                aria-expanded="true"
              >
                <i className="la la-shopping-cart la-2x opacity-80" />
                <span className="flex-grow-1 ml-1">
                  <span className="badge badge-primary badge-inline badge-pill">
                  {cart.length}
                  </span>
                  <span className="nav-box-text d-none d-xl-block opacity-70">
                    Cart
                  </span>
                </span>
              </a>
              {/* <HeaderCart /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  </>
)};

export default Header;

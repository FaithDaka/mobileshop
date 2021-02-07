/* eslint-disable max-len */
import React from "react";

const HeaderCart = () => (
  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation show">
    <div className="p-3 fs-15 fw-600 p-3 border-bottom">Cart Items</div>
    <ul className="h-250px overflow-auto c-scrollbar-light list-group list-group-flush">
      <li className="list-group-item">
        <span className="d-flex align-items-center">
          <a
            href="https://demo.activeitzone.com/ecommerce/product/oneplus-8t-128gb256gb-storage-no-card-slot-tqezb"
            className="text-reset d-flex align-items-center flex-grow-1"
          >
            <img
              src="./index_files/7PKdy6Amy6NiSabu2SXjXDHmq3tmgDqoJGVoBcBk.jpg"
              data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/7PKdy6Amy6NiSabu2SXjXDHmq3tmgDqoJGVoBcBk.jpg"
              className="img-fit size-60px rounded lazyloaded"
              alt="OnePlus 8T (128GB/256GB storage, no card slot)"
            />
            <span className="minw-0 pl-2 flex-grow-1">
              <span className="fw-600 mb-1 text-truncate-2">
                OnePlus 8T (128GB/256GB storage, no card slot)
              </span>
              <span className="">2x</span>
              <span className="">$615.00</span>
            </span>
          </a>
          <span className="">
            <button
              onClick="removeFromCart(0)"
              className="btn btn-sm btn-icon stop-propagation"
            >
              <i className="la la-close" />
            </button>
          </span>
        </span>
      </li>
      <li className="list-group-item">
        <span className="d-flex align-items-center">
          <a
            href="https://demo.activeitzone.com/ecommerce/product/iphone-11-iphone-11-pro-iphone-xs-iphone-8-plus-tck0m"
            className="text-reset d-flex align-items-center flex-grow-1"
          >
            <img
              src="./index_files/TBLHoW1yhYitLfZ7s8QfbUxq9kSZOUQCDbztbT48.jpeg"
              data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/TBLHoW1yhYitLfZ7s8QfbUxq9kSZOUQCDbztbT48.jpeg"
              className="img-fit size-60px rounded lazyloaded"
              alt="iPhone 11, iPhone 11 Pro, iPhone XS, iPhone 8 Plus"
            />
            <span className="minw-0 pl-2 flex-grow-1">
              <span className="fw-600 mb-1 text-truncate-2">
                iPhone 11, iPhone 11 Pro, iPhone XS, iPhone 8 Plus
              </span>
              <span className="">1x</span>
              <span className="">$2,000.00</span>
            </span>
          </a>
          <span className="">
            <button
              onClick="removeFromCart(1)"
              className="btn btn-sm btn-icon stop-propagation"
            >
              <i className="la la-close" />
            </button>
          </span>
        </span>
      </li>
    </ul>
    <div className="px-3 py-2 fs-15 border-top d-flex justify-content-between">
      <span className="opacity-60">Subtotal</span>
      <span className="fw-600">$3,230.00</span>
    </div>
    <div className="px-3 py-2 text-center border-top">
      <ul className="list-inline mb-0">
        <li className="list-inline-item">
          <a
            href="https://demo.activeitzone.com/ecommerce/cart"
            className="btn btn-soft-primary btn-sm"
          >
            View cart
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default HeaderCart;

/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CategoriesNav = () => (
  <div className="col-lg-3 position-static d-none d-lg-block">
    <div className="aiz-category-menu bg-white rounded  shadow-sm">
      <div className="p-3 bg-soft-primary d-none d-lg-block rounded-top all-category position-relative text-left">
        <span className="fw-600 fs-16 mr-3">Categories</span>
        <a
          href="https://demo.activeitzone.com/ecommerce/categories"
          className="text-reset"
        >
          <span className="d-none d-lg-inline-block">See All &gt;</span>
        </a>
      </div>
      <ul className="list-unstyled categories no-scrollbar py-2 mb-0 text-left">
        <li className="category-nav-element" data-id="1">
          <a href="#" className="text-truncate text-reset py-2 px-3 d-block">
            <img className="#" />
            <span className="cat-name">Women Clothing &amp; Fashion</span>
          </a>
          <div className="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
            <div className="c-preloader text-center absolute-center">
              <i className="las la-spinner la-spin la-3x opacity-70" />
            </div>
          </div>
        </li>
        <li className="category-nav-element" data-id="2">
          <a href="#" className="text-truncate text-reset py-2 px-3 d-block">
            <img className="#" />
            <span className="cat-name">Men Clothing &amp; Fashion</span>
          </a>
          <div className="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
            <div className="c-preloader text-center absolute-center">
              <i className="las la-spinner la-spin la-3x opacity-70" />
            </div>
          </div>
        </li>
        <li className="category-nav-element" data-id="3">
          <a href="#" className="text-truncate text-reset py-2 px-3 d-block">
            <img className="#" />
            <span className="cat-name">Computer &amp; Accessories</span>
          </a>
          <div className="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4">
            <div className="c-preloader text-center absolute-center">
              <i className="las la-spinner la-spin la-3x opacity-70" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default CategoriesNav;

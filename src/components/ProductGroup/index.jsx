/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react'
import Product from '../Product'

const ProductGroup = () => (
  <section className="mb-4">
    <div className="container">
      <div className="bg-white shadow-sm rounded">
        <div className="nav border-bottom aiz-nav-tabs">
          <a href="#tab_default_1" data-toggle="tab" className="p-2 fs-16 fw-600 text-reset show active">Brand New</a>
          <a href="#tab_default_2" data-toggle="tab" className="p-2 fs-16 fw-600 text-reset">UK Used</a>
          <a href="#tab_default_4" data-toggle="tab" className="p-2 fs-16 fw-600 text-reset">Accessories</a>
        </div>
      

      <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
        <Product image='images/phones/1612433148873-Phone1.jpeg' />
        <Product image='images/phones/1612431654138-apple4.jpeg' />
        <Product image='images/phones/1612431654140-apple5.jpeg' />
        <Product image='images/phones/1612433148873-Phone1.jpeg' />
        <Product image='images/phones/1612433512284-apple6.jpeg' />
        <Product image='images/phones/1612434188404-apple-12-a.jpeg' />
        <Product image='images/phones/1612433148873-Phone1.jpeg' />
        <Product image='images/phones/1612433148873-Phone1.jpeg' />
        <Product image='images/phones/1612433148873-Phone1.jpeg' />
        <Product image='images/phones/1612433148873-Phone1.jpeg' />
      </div>
      <div className="aiz-pagination aiz-pagination-center mb-4" />
    </div>
    </div>
  </section>
)

export default ProductGroup

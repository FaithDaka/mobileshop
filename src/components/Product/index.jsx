import React, { useState } from "react";
import _ from "lodash";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Truncate from 'react-truncate';
import CurrencyFormat from 'react-currency-format';
import SweetAlert from 'react-bootstrap-sweetalert';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StorageModal from "../../components/Modal/storage-modal";
import './styles.css'

const Product = ({ product }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const hideAlert = () => setShowAlert(false);
  const dispatch = useDispatch();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleAddToCart = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      const cartItems = {
        id: product._id,
        title: product.title,
        images: product.images[0].url,
        price: product.price,
        discount: product.discount,
        discountprice: product.discountprice,
        countInStock: product.countInStock,
        count: 1
      }

      cart.push(cartItems);

      let unique = _.uniqWith(cart, _.isEqual);
      localStorage.setItem("cart", JSON.stringify(unique));

      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      setShowAlert(true);
    }
  };

  const checkStorage = () => {
    if (product.storageChecked) {
      openModal()
    } else {
      handleAddToCart()
    }
  }

  return (
    <div className="col mb-2">
      <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md h-100 has-transition bg-white">
        {showAlert && (
          <SweetAlert
            success
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            title="Product Added to Cart Successfully!"
            timeout={2000}
          />
        )}
        <StorageModal modalIsOpen={modalIsOpen} close={closeModal} product={product} />
        <div className="position-relative">
          <Link to={`${process.env.PUBLIC_URL}/product/${product._id}`} className="d-block text-center pt-3">
            <LazyLoadImage
              alt="product"
              src={product.images && product.images.length ? product.images[0].url : ''}
              style={{ height: "150px", objectFit: "cover" }}
              threshold={100}
            />
          </Link>
          <div className="absolute-top-left pt-2 pl-2">
            {product.condition === 'Uk Used' ? <span className="badge badge-inline badge-danger">UK Used</span> : ''}
          </div>
        </div>
        <div className="p-md-3 p-2 text-left">
          <div className="fs-15">
            <div className="fw-600 ms-brand">{product.subs ? <span className="badge badge-inline badge-soft-secondary">{product.subs.name}</span> : ''}
            </div>
            <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-2">
            <Truncate lines={2} ellipsis={<span>... <Link to={`${process.env.PUBLIC_URL}/product/${product._id}`}></Link></span>}>
              {product.title}
            </Truncate>
          </h3>
            {
              product.discountprice ?
                <>
                  <span className="fw-700 text-reset">
                    <CurrencyFormat
                      prefix={"UGX "}
                      value={product.discountprice}
                      displayType="text"
                      thousandSeparator
                    />
                  </span>
                  <div className="s-prc-w">
                    <del className="d-block fw-500 opacity-70">
                      <CurrencyFormat
                        // prefix={"UGX "}
                        value={product.price}
                        displayType="text"
                        thousandSeparator
                      />
                    </del>
                    <div class="tag _dsct _sm">-{product.discount}%</div>
                  </div>
                </> :

                <span className="fw-700 text-reset">
                  <CurrencyFormat
                    prefix={"UGX "}
                    value={product.price}
                    displayType="text"
                    thousandSeparator
                  /></span>
            }
          </div>
          <div className="rating rating-sm mt-1">
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
          </div>
          
          <div className="mt-3" style={{
            display: "flex", position: "relative",
            alignItems: "center",
            transition: "all .35s ease",
            paddingBottom: "5px"
          }}>
            <button type="button" className="btn btn-product-cart" onClick={checkStorage}>
              <span className="btn-cart">Add Cart</span>
            </button>
            <button type="button" className=" btn btn-product-call">
              <a href="tel:0751290264">
                <i class="las la-phone la-2x btn-call"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

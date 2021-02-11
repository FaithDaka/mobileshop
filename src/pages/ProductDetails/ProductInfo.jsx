import React, { useState } from "react";
import _ from "lodash";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import SweetAlert from 'react-bootstrap-sweetalert';
import BuyNowModal from "../../components/Modal/buynow-modal";

const ProductInfo = ({ product }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const hideAlert = () => setShowAlert(false);

  const history = useHistory();
  const auth = useSelector(state => state.auth);

  const openModal = () => {

    const data =  {
      id: product._id,
      title: product.title,
      images: product.images[0].url,
      price: product.price,
      discount: product.discount,
      discountprice: product.discountprice,
      countInStock: product.countInStock
    }

    if (auth.authenticate) {
      localStorage.setItem("buynow", JSON.stringify(data));
      history.push("/buynow");
    } else {
      setIsOpen(true);
      localStorage.setItem("buynow", JSON.stringify(data));
    }
  };

  const closeModal = () => setIsOpen(false);
  const dispatch = useDispatch();

  //product.price = pricestorage

  // const SelectPrice = (e) => {
  //   setPriceStorage(e.target.value)
  // }

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
        count: 1,
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

  return (
    <div class="text-left">
      {showAlert && (
        <SweetAlert
          success
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          title="Product Added to Cart Successfully!"
          timeout={2000}
        />
      )}
      <BuyNowModal modalIsOpen={modalIsOpen} close={closeModal} />
      <h1 class="mb-2 fs-20 fw-600">
        {product.title}
      </h1>
      <div class="row align-items-center">
        <div class="col-6">
          <span class="rating">
            <i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i>
          </span>
          <span class="ml-1 opacity-50">(ratings)</span>
        </div>
        <div class="col-6 text-right">
          <span class="badge badge-md badge-inline badge-pill badge-success">{product.condition}</span>
        </div>
      </div>
      <hr />
      {/* <div class="row align-items-center">
        <div class="col-auto">
          <small class="mr-2 opacity-50">Brand: </small>
        </div>
        <div class="col-auto">
          <img src="https://demo.activeitzone.com/ecommerce/public/uploads/brands/4O6dOeaRludravngfvPPE0IEJukftaQZEt2uQVQ9.jpeg" alt="Apple" height="30" />
        </div>
      </div>
      <hr /> */}
      <div class="row no-gutters mt-3">
        <div class="col-sm-2">
          <div class="opacity-50 my-2">Price:</div>
        </div>
        <div class="col-sm-10">
          <div class="">
            <strong class="h2 fw-700 text-primary">
              <CurrencyFormat
                prefix={"UGX "}
                value={product.price}
                // value={pricestorage}
                displayType="text"
                thousandSeparator
              />
            </strong>
            <span class="opacity-70"></span>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-sm-2">
          <div class="opacity-50 my-2">Description:</div>
        </div>
        <div className="col-sm-10">
          <div className="">
            <span className="strong-700">{product.description}</span>
          </div>
        </div>
      </div>
      <hr />
      <form id="option-choice-form">
        <input type="hidden" name="_token" value="vbe0XjyB2Y0iwfSdZKC7OF33baVmgFU288VfaOks" />
        {' '}
        <input type="hidden" name="id" value="11" />


        <div className="row no-gutters">
          <div className="col-sm-2">
            <div className="opacity-50 my-2">Storage Capacity:</div>
          </div>
          <div className="col-sm-10">
            <div className="aiz-radio-inline">
              <label className="aiz-megabox pl-0 mr-2">
                <input type="radio" name="attribute_id_3" value="64GB" checked="" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                  64GB
              </span>
              </label>
              <label className="aiz-megabox pl-0 mr-2">
                <input type="radio" name="attribute_id_3" value="128GB" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                  128GB
              </span>
              </label>
              <label className="aiz-megabox pl-0 mr-2">
                <input type="radio" name="attribute_id_3" value="256GB" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                  256GB
              </span>
              </label>
            </div>
          </div>
        </div>


        <div className="row no-gutters">
          <div className="col-sm-2">
            <div className="opacity-50 my-2">Color:</div>
          </div>
          <div className="col-sm-10">
            <div className="aiz-radio-inline">
              <label className="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Black">
                <input type="radio" name="color" value="#000000" checked="" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                  <span className="size-30px d-inline-block rounded" style={{ background: '#000000' }} />
                </span>
              </label>
              <label className="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Blue">
                <input type="radio" name="color" value="#0000FF" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                  <span className="size-30px d-inline-block rounded" style={{ background: '#0000FF' }} />
                </span>
              </label>
              <label className="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Coral">
                <input type="radio" name="color" value="#FF7F50" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                  <span className="size-30px d-inline-block rounded" style={{ background: '#FF7F50' }} />
                </span>
              </label>
              <label className="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Red">
                <input type="radio" name="color" value="#FF0000" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                  <span className="size-30px d-inline-block rounded" style={{ background: '#FF0000' }} />
                </span>
              </label>
              <label className="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="White">
                <input type="radio" name="color" value="#FFFFFF" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                  <span className="size-30px d-inline-block rounded" style={{ background: '#FFFFFF' }} />
                </span>
              </label>
              <label className="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Yellow">
                <input type="radio" name="color" value="#FFFF00" />
                <span className="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                  <span className="size-30px d-inline-block rounded" style={{ background: '#FFFF00' }} />
                </span>
              </label>
            </div>
          </div>
        </div>

        <hr />


        <div className="row no-gutters">
          <div className="col-sm-2">
            <div className="opacity-50 my-2">Quantity:</div>
          </div>
          <div className="col-sm-10">
            <div className="product-quantity d-flex align-items-center">
              <div className="row no-gutters align-items-center aiz-plus-minus mr-3" style={{ width: '130px' }}>
                <button className="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity" disabled="">
                  <i className="las la-minus" />
                </button>
                <input type="text" name="quantity" className="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" value="1" min="1" max="0" readOnly="" />
                <button className="btn  col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity">
                  <i className="las la-plus" />
                </button>
              </div>
              <div className="avialable-amount opacity-60">
                (
              <span id="available-quantity">0</span>
                {' '}
              available)
            </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row no-gutters pb-3" id="chosen_price_div">
          <div className="col-sm-2">
            <div className="opacity-50 my-2">Total Price:</div>
          </div>
          <div className="col-sm-10">
            <div className="product-price">
              <strong id="chosen_price" className="h4 fw-700 text-primary">UGX 2,500,000</strong>
            </div>
          </div>
        </div>

      </form>
      <div class="mt-3">
        <button type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600" onClick={handleAddToCart}>
          <i class="las la-shopping-bag"></i>
          <span class="d-md-inline-block"> Add to cart</span>
        </button>
        <button type="button" class="btn btn-primary buy-now fw-600" onClick={openModal}>
          <i class="la la-shopping-cart"></i> Buy Now
                     </button>
      </div>
      <div class="row no-gutters mt-4">
        <div class="col-sm-2">
          <div class="opacity-50 my-2">Share:</div>
        </div>
        <div class="col-sm-10">
          <div class="aiz-share jssocials">
            <div class="jssocials-shares">
              <div class="jssocials-share jssocials-share-twitter"><a target="_blank" href="https://twitter.com/share?url=https%3A%2F%2Fdemo" class="jssocials-share-link"><i class="lab la-twitter jssocials-share-logo"></i></a></div>
              <div class="jssocials-share jssocials-share-facebook"><a target="_blank" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemo" class="jssocials-share-link"><i class="lab la-facebook-f jssocials-share-logo"></i></a></div>
              <div class="jssocials-share jssocials-share-linkedin"><a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fdemo" class="jssocials-share-link"><i class="lab la-linkedin-in jssocials-share-logo"></i></a></div>
              <div class="jssocials-share jssocials-share-whatsapp"><a target="_self" href="whatsapp://send?text=https%3A%2F%2Fdemo." class="jssocials-share-link"><i class="lab la-whatsapp jssocials-share-logo"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

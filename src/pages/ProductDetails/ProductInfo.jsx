import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import SweetAlert from 'react-bootstrap-sweetalert';
import BuyNowModal from "../../components/Modal/buynow-modal";
import HelmentData from '../../components/Helment'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";
import { addToCart } from '../../store/actions/cartActions';

const ProductInfo = ({ product }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [storageSize, setStorageSize] = useState('64GB');
  const [color, setColor] = useState('Black');
  const [storagePrice, setStoragePrice] = useState(product.storageprice && product.storageprice.sixtyfour);
  const [quantity, setQuantity] = useState(1);

  const hideAlert = () => setShowAlert(false);
  const changeColor = (e) => setColor(e.target.value);
  const handleOptionChange = (e) => setStorageSize(e.target.value);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const history = useHistory();
  const auth = useSelector(state => state.auth);

  let location = useLocation();
  let currentUrl = "https://mobileshop.ug" + location.pathname;

  const openModal = () => {

    const data = {
      id: product._id,
      title: product.title,
      images: product.images[0].url,
      price: product.price,
      discount: product.discount,
      discountprice: product.discountprice,
      countInStock: product.countInStock,
      quantity: quantity,
      totalprice: product.discount ? product.discountprice * quantity : product.price * quantity,
      storageSize,
      storagePrice,
      color
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

  const handleAddToCart = () => {
    const cat = {
      id: product._id,
      title: product.title,
      images: product.images[0].url,
      price: product.price,
      discount: product.discount,
      discountprice: product.discountprice,
      quantity: quantity,
      storageSize,
      storagePrice,
      color
    }

    dispatch(addToCart(cat))
    setShowAlert(true);
  };

  useEffect(() => {
    if (storageSize === '32GB') {
      setStoragePrice(product.storageprice && product.storageprice.thirtytwo)
    } else if
      (storageSize === '64GB') {
      setStoragePrice(product.storageprice && product.storageprice.sixtyfour)
    } else if (storageSize === '128GB') {
      setStoragePrice(product.storageprice && product.storageprice.onetwentyeight)
    }
    else if (storageSize === '256GB') {
      setStoragePrice(product.storageprice && product.storageprice.twofiftysix)
    }
    else if (storageSize === '512GB') {
      setStoragePrice(product.storageprice && product.storageprice.fivetwelve)
    }

  }, [storageSize]);

  const [scrolled, setScrolled] = useState(false)
  //   useEffect(() => {
  //     window.addEventListener("scroll", function() {
  //         var elementTarget = document.getElementById("sticky");
  //         if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {

  //             setScrolled(!scrolled)
  //         }
  //         else{
  //           setScrolled(scrolled)
  //         }
  //       });
  // }, [])

  return (
    <>
      <div class="text-left">
        {/* <HelmentData title={product.title}
        description={product.description}
        image={product.images && product.images.length ? product.images[0].url : ''}
      ></HelmentData> */}
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
      <div class="row no-gutters mt-2">
        <div class="col-sm-10">
          <div class="">
            <strong class="h2 fw-700 text-primary">
              {product.discount && !storagePrice && <strong id="chosen_price" class="h4 fw-600 text-primary">UGX  <CurrencyFormat
                value={product.discountprice * quantity}
                displayType="text"
                thousandSeparator
              /></strong>}
              {!product.discount && !storagePrice && <strong id="chosen_price" class="h4 fw-600 text-primary">UGX  <CurrencyFormat
                value={product.price * quantity}
                displayType="text"
                thousandSeparator
              /></strong>}
              {storagePrice && product.storageChecked && <strong id="chosen_price" class="h4 fw-600 text-primary">UGX  <CurrencyFormat
                value={storagePrice * quantity}
                displayType="text"
                thousandSeparator
              /></strong>}


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
          {product.storageChecked ? <div class="row no-gutters">
            <div class="col-sm-2">
              <div class="my-2">Storage Capacity: {storageSize}</div>
            </div>
            <div class="col-sm-10">
              <div class="aiz-radio-inline">
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.thirtytwo && <><input type="radio" name="storage" value="32GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      32GB
                                        </span></>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.sixtyfour && <><input type="radio" name="storage" value="64GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      64GB
                                        </span></>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.onetwentyeight && <>
                    <input type="radio" name="storage" value="128GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      128GB
                                        </span>
                  </>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.twofiftysix && <>
                    <input type="radio" name="storage" value="256GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      256GB
                                        </span>
                  </>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.fivetwelve && <>
                    <input type="radio" name="storage" value="512GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      512GB
                                        </span>
                  </>
                  }
                </label>
              </div>
            </div>
          </div> : ''}

          {product.condition === 'Brand New' && <div class="row no-gutters">
            <div class="col-sm-2">
              <div class="my-2">Color: {color}</div>
            </div>
            <div class="col-sm-10">
              <div class="aiz-radio-inline">
                <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Black">
                  <input type="radio" name="color" value="Black" onChange={changeColor} />
                  <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                    <span class="size-30px d-inline-block rounded" style={{ background: '#000000' }}></span>
                  </span>
                </label>
                <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Coral">
                  <input type="radio" name="color" value="Silver" onChange={changeColor} />
                  <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                    <span class="size-30px d-inline-block rounded" style={{ background: '#FF7F50' }}></span>
                  </span>
                </label>
                <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Red">
                  <input type="radio" name="color" value="Red" onChange={changeColor} />
                  <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                    <span class="size-30px d-inline-block rounded" style={{ background: '#FF0000' }}></span>
                  </span>
                </label>
              </div>
            </div>
          </div>}


          <div className="row no-gutters">
            <div className="col-sm-2">
              <div className="opacity-50 my-2">Quantity:</div>
            </div>
            <div className="col-sm-10">
              <div className="product-quantity d-flex align-items-center">
                <div className="row no-gutters align-items-center aiz-plus-minus mr-3" style={{ width: '130px' }}>
                  <button className="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity" onClick={decQuantity}>
                    <i className="las la-minus" />
                  </button>
                  <input type="text" name="quantity" className="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" value={quantity} min="1" max="0" />
                  <button className="btn  col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity" onClick={() => setQuantity(quantity + 1)}>
                    <i className="las la-plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row no-gutters" id="chosen_price_div">
            <div className="col-sm-2">
              <div className="opacity-50 my-2">Total Quantity Price:</div>
            </div>
            <div className="col-sm-10">
              <div className="product-price">
                <strong id="chosen_price" className="h4 fw-700 text-primary">UGX {product.discount ? <CurrencyFormat
                  value={product.discountprice * quantity}
                  displayType="text"
                  thousandSeparator
                /> : <CurrencyFormat
                    value={product.price * quantity}
                    displayType="text"
                    thousandSeparator
                  />}</strong>
              </div>
            </div>
          </div>

        </form>
        {
          !scrolled ?


            <div class="mt-2" style={{
              display: "flex",
              position: "relative",
              transition: "all .35s ease",
            }}>
              <button type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600" onClick={handleAddToCart}>
                <span class="d-md-inline-block"> Add to cart</span>
              </button>
              <button type="button" class="btn btn-primary buy-now fw-600" onClick={openModal}>
                Buy Now
        </button>
              <button type="button" className=" btn btn-product-call">
                <a href="tel:0751290264">
                  <i class="las la-phone la-2x btn-call-details"></i>
                </a>
              </button>
            </div>
            :
            <div className="scroll">
              <div class="mt-2" style={{
                display: "flex",
                position: "relative",
                transition: "all .35s ease",
              }}>
                <button type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600" onClick={handleAddToCart}>
                  <span class="d-md-inline-block"> Add to cart</span>
                </button>
                <button type="button" class="btn btn-primary buy-now fw-600" onClick={openModal}>
                  Buy Now
        </button>
                <button type="button" className=" btn btn-product-call">
                  <a href="tel:0751290264">
                    <i class="las la-phone la-2x btn-call-details"></i>
                  </a>
                </button>
              </div>
            </div>

        }

        <div class="row no-gutters">
          <div class="col-sm-2">
            <div class="opacity-50 my-2">Share:</div>
          </div>
          <div class="col-sm-10">
            <div class="aiz-share jssocials">
              <div class="jssocials-shares">
                <FacebookShareButton
                  url={currentUrl}
                  quote={product.description}
                  title={product.title}
                  hashtag="#mobileshopug"
                  image={product.images && product.images.length ? product.images[0].url : ''}
                  className="">
                  <FacebookIcon size={36} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={currentUrl}
                  title={product.title}
                  hashtag="#mobileshopug"
                  class="jssocials-share jssocials-share-twitter"
                >
                  <TwitterIcon size={36} />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={currentUrl}
                  quote={product.description}
                  title={product.title}
                  image={product.images && product.images.length ? product.images[0].url : ''}
                  separator=":: "
                  class="jssocials-share jssocials-share-whatsapp"
                >
                  <WhatsappIcon size={36} />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky"></div>
    </>
  )
}

export default ProductInfo

import React, { useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { addToCart } from '../../store/actions/cartActions';
import { useDispatch } from "react-redux";
import _ from "lodash";
import { toast } from "react-toastify";


const RelatedAccessories = ({ product }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const Msg = () => (
    <div>
      Product Added To Cart Successfully
      <Link to='/cart' className="pl-2">
        <button class="btn btn-sm btn-primary">Go To Cart</button>
      </Link>
    </div>
  )

  const handleAddToCart = () => {

    const cat = {
      _id: product._id,
      title: product.title,
      images: product.images[0].url,
      price: product.price,
      discount: product.discount,
      discountprice: product.discountprice,
      quantity: 1
    }

    var array = JSON.parse(window.localStorage.getItem("cartItems")) || [];
    var value = cat.id
    if (array.indexOf(value) === -1) {
      dispatch(addToCart(cat))
      toast(Msg)
    } else {
      toast.error("Product Already Added To Cart")
    }

  };
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    arrows: true,

  };

  return (
    <div>
      <div class="">
        <div className="p-3 border-bottom fs-16 fw-600"></div>
        {product.accessorys && product.accessorys.length !== 0 ? <div className="fw-600 p-3">Available Accessories</div> : ''}
        <div className="d-none d-md-block">
          <div className="container">
            <div className="row">
              {product.accessorys && product.accessorys.length !== 1 && product.accessorys.map((accessory) => (
                <div className="border rounded bg-white pr-4 mr-4 col-4 accessory-box">
                  <div className="border rounded bg-white inner-box">
                    <Link to={`/accessory/${accessory._id}`}>
                      <div style={{ width: "auto" }}>
                        <img src={accessory.images[0].url}
                          width="50" height="50"
                          alt="accessory" />

                      </div>
                    </Link>
                    <button className="cross float-right" onClick={handleAddToCart}>
                      <i class="bi bi-plus text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg></i>
                    </button>
                  </div>
                  <span className="fw-700 text-left acc-price">
                    <CurrencyFormat
                      prefix={"UGX "}
                      value={accessory.price}
                      displayType="text"
                      thousandSeparator
                    />
                  </span>

                </div>
              ))}
            </div>

          </div>
        </div>
      
      
      <div className="d-sm-none">
      <div className="container">
        <div className="row">
        <Slider autoplay={true} slidesToShow={2} autoplaySpeed={2000} infinite={true} arrows={false}>
        {product.accessorys && product.accessorys.length !== 1 && product.accessorys.map((accessory) => (
                <div className="border-light rounded shadow-sm hov-shadow-md ml-3 col-4 accessory-box" >
                  <div className="border rounded bg-white inner-box">
                    <Link to={`/accessory/${accessory._id}`}>
                      <div style={{ width: "auto" }}>
                        <img src={accessory.images[0].url}
                          width="50" height="50"
                          alt="accessory" />

                      </div>
                    </Link>
                    <button className="cross pt-1 float-right" onClick={handleAddToCart}>
                      <i class="bi bi-plus text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg></i>
                    </button>
                  </div>
                  <span className="fw-700 text-left acc-price">
                    <CurrencyFormat
                      prefix={"UGX "}
                      value={accessory.price}
                      displayType="text"
                      thousandSeparator
                    />
                  </span>

                </div>
              ))}
        </Slider>
        
        </div>
        </div>
      </div>
      <div>
      </div>
      </div>
      
    </div >
  )
}

export default RelatedAccessories

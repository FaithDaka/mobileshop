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

  return (
    <div>
      <div class="">
        <div className="p-3 border-bottom fs-16 fw-600"></div>
        {product.accessorys && product.accessorys.length !== 0 ? <div className="fw-600 p-3">Available Accessories</div> : ''}
        <div className="">
          <div className="container">
            <div className="row">
              {product.accessorys && product.accessorys.length !== 1 && product.accessorys.map((accessory) => (
                <div className="mr-3 col-4 accessory-box">
                  <div className="border rounded bg-white inner-box">
                  <Link to={`/accessory/${accessory._id}`}>
                    <div style={{ width: "auto" }}>
                      <img src={accessory.images[0].url}
                        width="50" height="50"
                        alt="accessory" />

                    </div>
                  </Link>
                  <button className="cross pt-2 float-right" onClick={handleAddToCart}>
                    <i class="las la-plus"></i>
                  </button>
                  </div>
                  <span className="fw-700 acc-price">
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
      </div>
    
    </div >
  )
}

export default RelatedAccessories

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const RelatedAccessories = ({ product }) => {
  return (
    <div>
      <div className="p-3 border-bottom fs-16 fw-600"></div>
      {product.accessorys && product.accessorys.length !== 1 ? '' : <div className="opacity-50 my-2">Available Accessories</div>}
      <div className=".d-none .d-sm-block .d-md-none">
        <div className="container">
          <div className="row">
              {product.accessorys && product.accessorys.length !== 1 && product.accessorys.map((accessory) => (
                <div className="col-4">
                  <Link to={`/accessory/${accessory._id}`}>
                  <div className="border rounded bg-white">
                    <img src={accessory.images[0].url}
                      width="50" height="50"
                      alt="accessory" />
                    <button className="cross">
                      <i class="las la-plus"></i>
                    </button>
                  </div>
                  </Link>
                  <p className="acc-price">{accessory.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default RelatedAccessories

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedAccessories = ({ product }) => {
  return (
    <div>
      <div className="p-3 border-bottom fs-16 fw-600"></div>
      <div className="opacity-50 my-2">Available Accessories</div>
      <div className=".d-none .d-sm-block .d-md-none">
        <div className="container">
          <div className="row">
            <Slider autoplay={true} slidesToShow={3} autoplaySpeed={2000} infinite={true} arrows={false}>
              {product.accessorys && product.accessorys.map((accessory) => (
                <div className="col-4">
                  <div className="border rounded bg-white">
                    <img src={accessory.images[0].url}
                      width="50" height="50"
                      alt="accessory" />
                    <button className="cross">
                      <i class="las la-plus"></i>
                    </button>
                  </div>
                  <p className="acc-price">{accessory.price}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div >
  )
}

export default RelatedAccessories

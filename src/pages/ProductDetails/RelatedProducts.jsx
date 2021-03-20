import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadSpinner from '../../components/Spinner';
import Product from '../../components/Product/product-slidder'

const RelatedProducts = ({ related, loading }) => {
  return (
    <div className="rounded shadow-sm mb-3">
      <div className="border-bottom p-3">
        <h3 className="fs-16 fw-600 mb-0">
          <span className="mr-4">Related products</span>
        </h3>
        {loading && <LoadSpinner />}
      </div>
      <div className="pt-3">
            <Slider autoplay={true} slidesToShow={4} autoplaySpeed={2000} infinite={true} arrows={false}>
              {
                related.map(item => (
                  <Product product={item} />
                ))}
            </Slider>
      </div>
    </div>
  )
}

export default RelatedProducts

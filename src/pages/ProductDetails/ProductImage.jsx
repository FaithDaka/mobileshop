import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductImage = ({ product }) => {
  const [currentImage, setCurrentImage] = useState("");

  const renderImage = () => {
    return (
      <LazyLoadImage
        class="responsive-img"
        src={currentImage ? currentImage : product.images && product.images.length ? product.images[0].url : ''}
        alt="image-details"
      />
    );
  };

  return (
    <div className="row">
      <div className="col-3">
        <div class="thumbnail-container">
          {product.images && product.images.length ? product.images.map((thumb, index) =>
            <Link to="#" key={thumb.id}
              onClick={() =>
                setCurrentImage(
                  index === 0 ? product.images.url : thumb.url
                )
              }>
              <div class="border p-1 rounded thumbnail-box">
                <LazyLoadImage
                  class="thumbnail-img"
                  src={index === 0 ? product.images[0].url : thumb.url}
                  alt="thumbnail"
                />
              </div>
            </Link>
          ) : ''
          }
        </div>

      </div>
      <div className="col-9">
        <div className="img-box">
          {renderImage()}
        </div>
      </div>
    </div>
  )
}

export default ProductImage;
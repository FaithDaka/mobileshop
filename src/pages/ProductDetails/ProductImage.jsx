import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RWebShare } from "react-web-share";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const ProductImage = ({ product }) => {
  const [currentImage, setCurrentImage] = useState("");
  const history = useHistory();
  const auth = useSelector(state => state.auth);

  let location = useLocation();
  let currentUrl = `https://mobileshop.ug ${location.pathname}`;
  const handleClick =()=>{
    console.log(currentUrl)
  }


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
      <div class="float-right"><RWebShare
        data={{
          text: "Check out this product on mobileshop.ug",
          url:{currentUrl},
          // title: "Flamingos",
        }}
      >
        <i class="las la-share-alt-square"></i>
      </RWebShare></div>
        <div className="img-box">
          {renderImage()}
          <button onClick={handleClick}>Click me!</button>
        </div>
        
      </div>
    </div>
  )
}

export default ProductImage;
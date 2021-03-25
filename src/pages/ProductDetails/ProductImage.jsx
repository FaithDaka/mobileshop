import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProductImage = ({ product }) => {
  const [currentImage, setCurrentImage] = useState("");
  const history = useHistory();
  const auth = useSelector(state => state.auth);

  let location = useLocation();
  let currentUrl = "https://mobileshop.ug" + location.pathname;
  let shareImage = product.images && product.images.length ? product.images[0].url : ''

  const renderImage = () => {
    return (
      <LazyLoadImage
        class="responsive-img"
        src={currentImage ? currentImage : product.images && product.images.length ? product.images[0].url : ''}
        alt="image-details"
      />
    );
  };

  const iconstyles = {
    fontSize: "20px",
    border: "none",
    color: "#f90",

  }
  const urlToObject = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], { shareImage }, { type: blob.type });
    return file;
  };
  const files = urlToObject({ currentUrl })

  const sharePage = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Checkout this product on mobileshop",
          text: product.title,
          url: document.location.href,
          file: { files }
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error);
        });
    }
    console.log(files)
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
        <div className='d-none d-lg-block'>
      {
          product.category === 'Mobile Phones'?
        
        <div className="img-box"> 

          {renderImage()}
        </div>
        :
        <div> 

          {renderImage()}
        </div>
}
</div>
<div class="d-lg-none">
        <div className="img-box">

          {renderImage()}
        </div>
        </div>

        <div class="border p-1 rounded float-right thumbnaily-box" >
          <i class="bi bi-share" onClick={sharePage} style={iconstyles}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
          </i>
        </div>
      </div>

    </div>
  )
}

export default ProductImage;
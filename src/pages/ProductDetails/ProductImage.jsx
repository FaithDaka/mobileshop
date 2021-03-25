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
      <div className="col-9" >
        <div className='d-none d-lg-block'>
          {
            product.category && product.category.name === 'Mobile Phones' || product.category && product.category.name === 'Tablets' ?

              <div className="img-box">

                {renderImage()}
              </div>
              :
              <div className='ml-0 pl-0 pt-2 '>

                {renderImage()}
              </div>
          }
        </div>
        <div class="d-lg-none">
          <div className="img-box">

            {renderImage()}
          </div>
        </div>


      </div>

    </div>
  )
}

export default ProductImage;
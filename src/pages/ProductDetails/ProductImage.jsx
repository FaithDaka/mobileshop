import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RWebShare } from "react-web-share";

const ProductImage = ({ product }) => {
  const [currentImage, setCurrentImage] = useState("");
  const history = useHistory();
  const auth = useSelector(state => state.auth);

  let location = useLocation();
  let currentUrl = "https://mobileshop.ug" + location.pathname;
  const renderImage = () => {
    return (
      <LazyLoadImage
        class="responsive-img"
        src={currentImage ? currentImage : product.images && product.images.length ? product.images[0].url : ''}
        alt="image-details"
      />
    );
  };

  const iconstyles={
    fontSize:"20px",
    border:"none",
    color:"#f90",
    // paddingBottom:"2%",

  }
const urlToObject = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob],{currentImage}, { type: blob.type });
  return file;
};
const files=urlToObject({currentUrl})

const sharePage = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "title",
        text: "text",
        url: document.location.href,
        file:{files}
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


  // const sharePage=()=>{
  //   console.log(currentUrl)
  // }
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
        <div class="border p-1 rounded float-right thumbnail-box" style={{marginRight:"-10%"}} >
        <i class="bi bi-share" onClick={sharePage} style={iconstyles}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg>
        </i>
        </div>
          {renderImage()}
        </div>
      </div>
    </div>
  )
}

export default ProductImage;
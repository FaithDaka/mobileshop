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
  let shareImage = product.images && product.images.length ? product.images[0].url : ''

  console.log("Image ====>",shareImage)
  const renderImage = () => {
    return (
      <LazyLoadImage
        class="responsive-img"
        src={currentImage ? currentImage : product.images && product.images.length ? product.images[0].url : ''}
        alt="image-details"
      />
    );
  };

// const sharePage=()=>{
//   if ('canShare' in navigator) {
//     const share = async function() {
//       try {
        // const response = await fetch(shareimg);
        // const blob = await response.blob();
        // const file = new File([blob], {currentImage}, {type: blob.type});
  
//         await navigator.share({
//           url: document.location.href,
//           title:"Check this out",
//           text: "sharetext",
//           files: [file]
//         });
//       } catch (err) {
//         console.log(err.name, err.message);
//       }
//     };
//   }
const urlToObject = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob],{shareImage}, { type: blob.type });
  return file;
};
const files=urlToObject({currentUrl})

const sharePage = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Checkout this product on mobileshop",
        text: product.title,
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
        <div class="float-right">
        <i class="las la-share-alt-square" onClick={sharePage}></i>
        {/* <RWebShare
        data={{
          text: "hhhh",
          url: {currentUrl},
          title: "Flamingos",
        }}
      >
        <button>Share 🔗</button>
      </RWebShare> */}
        </div>
          {renderImage()}
        </div>
      </div>
    </div>
  )
}

export default ProductImage;
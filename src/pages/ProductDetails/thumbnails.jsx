import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Thumbnails = ({ product }) => {
  return(
  <div class="col-12 col-md-auto w-md-80px order-2 order-md-1 mt-3 mt-md-0">
    <div class="aiz-carousel product-gallery-thumb slick-initialized slick-slider" data-items="5" data-nav-for=".product-gallery" data-vertical="true" data-vertical-sm="false" data-focus-select="true" data-arrows="true">
      <div class="slick-list draggable">
        <div class="slick-track" style={{ opacity: '1', width: '180px', transform: 'translate3d(0px, 0px, 0px)' }}>
          {/* {product.images && product.images.length ? product.images.map((thumb, index) =>
            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '60px' }}>
              <div>
                <div class="carousel-box c-pointer border p-1 rounded" style={{ width: '70%', display: 'inline-block' }}>
                  <img class="mw-100 size-50px mx-auto lazyloaded" src={thumb.images.url} alt="thumbnail"/>
                </div>
              </div>
            </div>
          ) : ''
          } */}

          {/* {product.images && product.images.length ? product.images.map((item) =>
           <LazyLoadImage src={item.images.url} alt="cart images"
           width="60"
       />
          
          ):''} */}


        </div>
      </div>
    </div>
  </div>
)}

export default Thumbnails;

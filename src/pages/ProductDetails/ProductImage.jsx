import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductImage = ({product}) => (
  <div class="z-3 row gutters-10">
    <div class="col order-1 order-md-2">
      <div class="aiz-carousel product-gallery slick-initialized slick-slider" data-nav-for=".product-gallery-thumb" data-fade="true">
        <div class="slick-list draggable">
          <div class="slick-track text-center" style={{ opacity: '1', width: '894px' }}>
            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '298px', position: 'relative', left: '0px', top: '0px', zIndex: '999', opacity: '1' }}>
              <div>
                <div class="carousel-box img-zoom rounded" style={{ width: '30%', display: 'inline-block' }}>
                  <LazyLoadImage class="img-fluid lazyloaded"  src={product.images && product.images.length ? product.images[0].url : ''} alt='singleimage' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProductImage

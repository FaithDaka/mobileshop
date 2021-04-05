import React from "react";
import Slider from "react-slick";

const BannerSlidder = () => {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    draggable: false,
    fade: true
  };

  return (
        <div className="slick-list draggable">
          <Slider {...settings}>
            <div className="slick-slide">
              <div class="carousel-box" >
                  <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/1.webp" alt="MobileShop Banner" height="340" />
              </div>
            </div>
            <div className="slick-slide">
            <div class="carousel-box" >
                  <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/3.webp" alt="MobileShop Banner" height="340" />
              </div>
            </div>
            <div className="slick-slide">
            <div class="carousel-box" >
                  <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/5.webp" alt="MobileShop Banner" height="340" />
              </div>
            </div>
          </Slider>
        </div>
  )
};

export default BannerSlidder;

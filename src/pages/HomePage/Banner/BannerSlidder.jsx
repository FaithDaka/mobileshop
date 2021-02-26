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
    <div className="d-xl-none d-lg-block col-lg-7 ">
      <div className="mobile-img-auto-height">
        <div className="slick-list draggable">
          <Slider {...settings}>
            <div className="slick-slide">
              <div className="carousel-box">
                <img
                  className="d-block rounded shadow-sm lazyloaded responsive"
                  src="images/Banner1.jpeg"
                  alt="Slidder Banner"
                />
              </div>
            </div>
            <div className="slick-slide">
              <div className="carousel-box">
                <img
                  className="d-block rounded shadow-sm lazyloaded responsive"
                  src="images/banner-new.jpeg"
                  alt="Slidder Banner"
                />
              </div>
            </div>
            <div className="slick-slide">
              <div className="carousel-box">
                <img
                  className="d-block rounded shadow-sm lazyloaded responsive"
                  src="images/banner-new-1.jpeg"
                  alt="Slidder Banner"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
};

export default BannerSlidder;

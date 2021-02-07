import React from "react";
import Slider from "react-slick";

const BannerSlidder = () => {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    draggable: false,
    fade: true
  };

  return (
    <div className=" col-lg-7 ">
      <div className="mobile-img-auto-height">
        <div className="slick-list draggable">
          <Slider {...settings}>
            <div className="slick-slide"
              style={{ width: '640px' }}>
              <div className="carousel-box"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <img
                  className="d-block mw-100 rounded shadow-sm lazyloaded"
                  src="images/slidder1.png"
                  alt="Slidder Banner"
                  height="315"
                />
              </div>
            </div>
            <div className="slick-slide"
              style={{ width: '640px' }}>
              <div className="carousel-box"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <img
                  className="d-block mw-100 rounded shadow-sm lazyloaded"
                  src="images/slidder2.png"
                  alt="Slidder Banner"
                  height="315"
                />
              </div>
            </div>
            <div className="slick-slide"
              style={{ width: '640px' }}>
              <div className="carousel-box"
                style={{ width: '100%', display: 'inline-block' }}
              >
                <img
                  className="d-block mw-100 rounded shadow-sm lazyloaded"
                  src="images/slidder3.jpg"
                  alt="Slidder Banner"
                  height="315"
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

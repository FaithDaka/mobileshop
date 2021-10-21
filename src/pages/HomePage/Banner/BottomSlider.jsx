import React from "react";
import Slider from "react-slick";

const BottomSlidder = () => {

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
        <section className="bottom-slider">
            <div className="slick-list draggable" style={{ marginTop: "-3.5%" }}>
                <Slider {...settings}>
                    <div className="slick-slide">
                        <div class="carousel-box position-relative bslidder" >
                            <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/bnew1.jpg" alt="MobileShop Banner" />
                            <button class="position-absolute bottom-0 end-0 text-white fw-bold bbslidder" style={{ marginBottom: "5%", marginRight: "-60%" }}>Shop Now <span>&#x27A4;</span></button>

                        </div>
                    </div>
                    <div className="slick-slide">
                        <div class="carousel-box position-relative bslidder" >
                            <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/bnew2.jpg" alt="MobileShop Banner" />
                            <button class="position-absolute bottom-0 end-0 text-white fw-bold bbslidder" style={{ marginBottom: "5%", marginRight: "-60%" }}>Shop Now <span>&#x27A4;</span></button>

                        </div>
                    </div>
                    <div className="slick-slide">
                        <div class="carousel-box position-relative bslidder" >
                            <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/bnew3.jpg" alt="MobileShop Banner" />
                            <button class="position-absolute bottom-0 end-0 text-white fw-bold bbslidder" style={{ marginBottom: "5%", marginRight: "-60%" }}>Shop Now <span>&#x27A4;</span></button>

                        </div>
                    </div>
                    <div className="slick-slide">
                        <div class="carousel-box position-relative bslidder" >
                            <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/bnew4.jpg" alt="MobileShop Banner" />
                            <button class="position-absolute bottom-0 end-0 text-white fw-bold bbslidder" style={{ marginBottom: "5%", marginRight: "-60%" }}>Shop Now <span>&#x27A4;</span></button>

                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
};

export default BottomSlidder;

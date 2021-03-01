import React from "react";
import BannerSlidder from "./BannerSlidder";
import CategoriesNav from "./CategoriesNav";
import TopDeals from "./TopDeals";

const Banner = () => (
  <div className="home-banner-area mb-2 pt-3">
    <div className="container">
      <div className="row gutters-10 position-relative">
        {/* <CategoriesNav /> */}
        <BannerSlidder />
        {/* <TopDeals /> */}
      </div>
    </div>
  </div>
);

export default Banner;

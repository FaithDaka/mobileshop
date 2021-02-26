/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import BottomFooter from "./Footer/BottomFooter";
import BottomMenu from "./MobileMenu/BottomMenu";
import MobileHeader from './MobileMenu/MobileHeader';
import MobileDrawer from './MobileMenu/MobileDrawer';

const Layout = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  return (
    <div className="aiz-main-wrapper d-flex flex-column">
      <Header open={openDrawer} />
      <MobileHeader open={openDrawer} />
      <section class="d-none d-lg-block text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <img src="https://demo.activeitzone.com/ecommerce/public/assets/img/404.svg" class="mw-100 mx-auto mb-5" height="200" />
              <h1 class="fw-700">Desktop Version Under Development</h1>
              <p class="fs-16 opacity-60">Our Desktop computer version is currently under development. Access mobileshop on your mobile phone to enjoy convient shopping.</p>
            </div>
          </div>
        </div>
      </section>
      {children}
      <Footer />
      <BottomFooter />
      {showDrawer && (<MobileDrawer close={closeDrawer} />)}
      <BottomMenu open={openDrawer} />
    </div>
  )
};

export default Layout;

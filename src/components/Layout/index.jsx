import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import BottomFooter from "./Footer/BottomFooter";
import BottomMenu from "./MobileMenu/BottomMenu";

const Layout = ({ children }) => (
  <div className="aiz-main-wrapper d-flex flex-column">
    {/* <TopBar /> */}
    <Header />
    {children}
    <Footer />
    <BottomFooter />
    <BottomMenu />
  </div>
);

export default Layout;

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

  return(
  <div className="aiz-main-wrapper d-flex flex-column">
    {/* <TopBar /> */}
    <Header open={openDrawer} />
    <MobileHeader open={openDrawer} />
    {children}
    <Footer />
    <BottomFooter />
    {showDrawer && (<MobileDrawer close={closeDrawer} />)}
    <BottomMenu open={openDrawer} />
  </div>
)};

export default Layout;

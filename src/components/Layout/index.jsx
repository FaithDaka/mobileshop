/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "./Header";
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
      {children}
      {showDrawer && (<MobileDrawer close={closeDrawer} />)}
      <BottomMenu open={openDrawer} />
    </div>
  )
};

export default Layout;

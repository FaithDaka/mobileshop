/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "./Header";
import BottomMenu from "./MobileMenu/BottomMenu";
import MobileHeader from './MobileMenu/MobileHeader';
import MobileDrawer from './MobileMenu/MobileDrawer';

const Layout = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [rotate, setRotate] = useState(false);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  const toTop = () => {
    window.scrollTo(0, 0)
  };
  const rotateIcon=()=>{
    setRotate(!rotate)
  }

  return (
    <div className="aiz-main-wrapper d-flex flex-column">
      <Header open={openDrawer} />
      <MobileHeader open={openDrawer} />
      {children}
      {showDrawer && (<MobileDrawer close={closeDrawer} />)}
      {/* <div class="fab-wrapper">
        <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
        <label class="fab text-center fw-bold" for="fabCheckbox">
        <i className={rotate ? "las la-plus la-3x fabIcon" : "las la-plus la-3x"} onClick={rotateIcon}></i>        </label>
        <div class="fab-wheel shadow-lg bg-white rounded">
          <div class="d-flex flex-column">
            <span class="p-2 border-bottom fabbie">
              <button class="border-0 bg-transparent" onClick={toTop} style={{ fontWeight: "bold" }}>
                <i class="bi bi-chevron-double-up px-1"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                  <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg></i>Go to top
              </button>
            </span>

            <span class="p-2 border-bottom fabbie" style={{ fontWeight: "bold" }}>
              <i class="bi bi-phone px-2"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg></i>Smartphones</span>
            <span class="p-2 border-bottom fabbie" style={{ fontWeight: "bold" }}>
              <i class="bi bi-laptop px-2"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
              </svg></i>Laptops</span>
            <span class="p-2 fabbie d-sm-none" style={{ fontWeight: "bold", color: "black" }}>
              <a href="tel:0709744874" style={{ fontWeight: "bold", color: "black" }}>
                <i class="bi bi-telephone-forward px-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                </svg></i>Call us
            </a>
            </span>
          </div>

        </div>
      </div>
       */}
       <div class="mainopShadow"></div>
<div class="fab">
  <div class="mainop">
  <i className={rotate ? "las la-plus la-3x fabIcon" : "las la-plus la-3x"} onClick={rotateIcon}></i>  </div>
 <div className="fab-menu">
  <div id="drawings" class="minifab op4 text-center">
  <i class="las la-arrow-up la-2x text-white text-center"></i>
  <div class="label-text">Go to Top</div> </div>
  <div id=" position-relative slides" class="minifab op3 text-center">
  <i class="las la-mobile-alt la-2x text-white text-center"></i>  
  <div class="label-text">Smartphones</div>
  </div>
  
  <div id="sheets" class="minifab op2">
 
  <i class="las la-laptop la-2x text-white text-center"></i> 
  <div class="label-text">Laptops</div> </div>
  <div id="docs" class="minifab op1">
    
  <i class="las la-phone la-2x text-white text-center"></i>
  <div class="label-text">Call us</div>
    </div>
</div>
</div>
      
      <BottomMenu open={openDrawer} />
    </div>
  )
};

export default Layout;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import {isWebpSupported} from 'react-image-webp/dist/utils';

import Systems from './systems';
import Phones from './phones';
import Tablet from './tablet'
import Accessories from './accessories';
import Televisions from './televisons';
import Fridges from './fridges';
import Gaming from './gaming';
import Laptop from './laptops';

import './styles.css';

const ProductGroup = () => {
  const [currentTab, setCurrentTab] = useState('phones');

  const divstyles = {
    fontSize: "13px"
  }

  const divstyle = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    overflow: "hidden"
  }
  const imagestyle = {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "auto",
    display: "block",
  }

  const renderView = () => {
    if (currentTab === 'systems') {
      return <Systems />;
    }
    if (currentTab === 'phones') {
      return <Phones />;
    }
    if (currentTab === 'accessories') {
      return <Accessories />;
    }
    if (currentTab === 'televisions') {
      return <Televisions />;
    }
    if (currentTab === 'laptops') {
      return <Laptop />;
    }
    if (currentTab === 'fridges') {
      return <Fridges />;
    }
    if (currentTab === 'gaming') {
      return <Gaming />;
    }
    if (currentTab === 'tablet') {
      return <Tablet />;
    }

  };

  return (

    <section className=" mb-3" >
      <div className=" container">
        <div className="d-md-none shadow p-3 bg-white rounded">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="row">
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('phones')} >
                  <div className="border" style={divstyle}>
                    <img src="images/phones.webp"
                      alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'phones' ? 'selected' : 'tab-text'} style={divstyles}>Phones</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('televisions')}>
                  <div className="border" style={divstyle}>
                    <img src="images/tvs.webp" alt="Televison" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'televisions' ? 'selected' : 'tab-text'} style={divstyles}>Televisions</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('fridges')}>
                  <div className="border" style={divstyle}>
                    <img src="images/fridges.webp"
                      alt="Fridge" width="50" height="50" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'fridges' ? 'selected' : 'tab-text'} style={divstyles} >Fridges</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('accessories')}>
                  <div className="border" style={divstyle}>
                    <img src="images/pods.webp" alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'accessories' ? 'selected' : 'tab-text'} style={divstyles}>Accessories</a>
                </div>


              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6" >
              <div className="row">
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('laptops')} >
                  <div className="border" style={divstyle}>
                    <img src="images/mac.webp" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'laptops' ? 'selected' : 'tab-text'} style={divstyles}>Laptops</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('systems')}>
                  <div className="border" style={divstyle}>
                    <img src="images/speakers.webp" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'systems' ? 'selected' : 'tab-text'} style={divstyles}>Speakers</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('tablet')}>
                  <div className="border" style={divstyle}>
                    <img src="images/tablets.webp" alt="Tablet" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'tablet' ? 'selected' : 'tab-text'} style={divstyles}>Tablets</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('gaming')}  >
                  <div className="border" style={divstyle}>
                    <img src="images/gaming.webp" alt="Gaming" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'gaming' ? 'selected' : 'tab-text'} style={divstyles}>Gaming</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* desktop view */}
      <div className=" d-none d-lg-block container">
      <div class="shadow-sm bg-white p-2 rounded">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6" >
              <div className="row">
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('phones')} >
                  <div className="border" style={divstyle}>
                      {isWebpSupported() ? <img src="images/phones.webp" alt="sccesories" style={imagestyle} /> : '' }
                  </div>
                  <a href="#" className={currentTab === 'phones' ? 'selected' : 'tab-text'} style={divstyles}>Phones</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('televisions')}>
                  <div className="border" style={divstyle}>
                    {isWebpSupported() ? <img src="images/tvs.webp" alt="sccesories" style={imagestyle} /> : '' }
                  </div>
                  <a href="#" className={currentTab === 'televisions' ? 'selected' : 'tab-text'} style={divstyles}>Televisions</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('fridges')}>
                  <div className="border" style={divstyle}>
                      {isWebpSupported() ? <img src="images/fridges.webp" width="50" height="50" alt="sccesories" style={imagestyle} /> : '' }
                  </div>
                  <a href="#" className={currentTab === 'fridges' ? 'selected' : 'tab-text'} style={divstyles} >Fridges</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('accessories')}>
                  <div className="border" style={divstyle}>
                    {isWebpSupported() ? <img src="images/pods.webp" alt="sccesories" style={imagestyle} /> : '' }
                  </div>
                  <a href="#" className={currentTab === 'accessories' ? 'selected' : 'tab-text'} style={divstyles}>Accessories</a>
                </div>


              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6" >
              <div className="row">
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('laptops')} >
                  <div className="border" style={divstyle}>
                    {isWebpSupported() ? <img src="images/mac.webp" alt="sccesories" style={imagestyle} /> : '' }
                  </div>
                  <a href="#" className={currentTab === 'laptops' ? 'selected' : 'tab-text'} style={divstyles}>Laptops</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('systems')}>
                  <div className="border" style={divstyle}>
                    {isWebpSupported() ? <img src="images/speakers.webp" alt="sccesories" style={imagestyle} /> : '' }
                  </div>
                  <a href="#" className={currentTab === 'systems' ? 'selected' : 'tab-text'} style={divstyles}>Speakers</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('tablet')}>
                  <div className="border" style={divstyle}>
                    {isWebpSupported() ? <img src="images/tablets.webp" alt="sccesories" style={imagestyle} /> : '' }
                  </div>
                  <a href="#" className={currentTab === 'tablet' ? 'selected' : 'tab-text'} style={divstyles}>Tablets</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('gaming')}  >
                  <div className="border" style={divstyle}>
                    {isWebpSupported() ? <img src="images/gaming.webp" alt="sccesories" style={imagestyle} /> : '' }
                  </div>
                  <a href="#" className={currentTab === 'gaming' ? 'selected' : 'tab-text'} style={divstyles}>Gaming</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* desktop view */}

      
      <div className="my-3 rounded categories-container container">
        {renderView()}
      </div>
    </section>
  )
}

export default ProductGroup

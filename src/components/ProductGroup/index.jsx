/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'

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
        <div className="d-md-none shadow p-3 mb-5 bg-white rounded">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6" style={{ paddingBottom: "2%" }}>
              <div className="row">
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('phones')} >
                  <div className="border" style={divstyle}>
                    <img src="data:image/jpeg;base64,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"
                      alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'phones' ? 'selected' : 'tab-text'} style={divstyles}>Phones</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('televisions')}>
                  <div className="border" style={divstyle}>
                    <img src="https://www.91-img.com/pictures/television/elegant-germany/-96356-large-1.jpg?tr=q-60" alt="Televison" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'televisions' ? 'selected' : 'tab-text'} style={divstyles}>Televisions</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('fridges')}>
                  <div className="border" style={divstyle}>
                    <img src="data:image/jpeg;base64,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"
                      alt="Fridge" width="50" height="50" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'fridges' ? 'selected' : 'tab-text'} style={divstyles} >Fridges</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('accessories')}>
                  <div className="border" style={divstyle}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg" alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'accessories' ? 'selected' : 'tab-text'} style={divstyles}>Accessories</a>
                </div>


              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6" >
              <div className="row">
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('laptops')} >
                  <div className="border" style={divstyle}>
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415816_sd.jpg" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'laptops' ? 'selected' : 'tab-text'} style={divstyles}>Laptops</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('systems')}>
                  <div className="border" style={divstyle}>
                    <img src="https://inteng-storage.s3.amazonaws.com/img/iea/EBwmdnLL60/sizes/acoustic-audio_resize_md.jpg" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'systems' ? 'selected' : 'tab-text'} style={divstyles}>Sound Systems</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('tablet')}>
                  <div className="border" style={divstyle}>
                    <img src="https://brain-images-ssl.cdn.dixons.com/3/4/10197643/u_10197643.jpg" alt="Tablet" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'tablet' ? 'selected' : 'tab-text'} style={divstyles}>Tablets</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('gaming')}  >
                  <div className="border" style={divstyle}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81f4ZAbIp7L._SL1500_.jpg" alt="Gaming" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'gaming' ? 'selected' : 'tab-text'} style={divstyles}>Gaming</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* desktop view */}
      <div className=" d-none d-lg-block container" style={{marginBottom:"43%"}}>
      <div class="shadow-sm bg-white p-4 rounded mb-4">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6" style={{ paddingBottom: "2%" }}>
              <div className="row">
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('phones')} >
                  <div className="border" style={divstyle}>
                    <img src="data:image/jpeg;base64,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"
                      alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'phones' ? 'selected' : 'tab-text'} style={divstyles}>Phones</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('televisions')}>
                  <div className="border" style={divstyle}>
                    <img src="https://www.91-img.com/pictures/television/elegant-germany/-96356-large-1.jpg?tr=q-60" alt="Televison" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'televisions' ? 'selected' : 'tab-text'} style={divstyles}>Televisions</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('fridges')}>
                  <div className="border" style={divstyle}>
                    <img src="data:image/jpeg;base64,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"
                      alt="Fridge" width="50" height="50" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'fridges' ? 'selected' : 'tab-text'} style={divstyles} >Fridges</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('accessories')}>
                  <div className="border" style={divstyle}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg" alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'accessories' ? 'selected' : 'tab-text'} style={divstyles}>Accessories</a>
                </div>


              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6" >
              <div className="row">
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('laptops')} >
                  <div className="border" style={divstyle}>
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415816_sd.jpg" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'laptops' ? 'selected' : 'tab-text'} style={divstyles}>Laptops</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('systems')}>
                  <div className="border" style={divstyle}>
                    <img src="https://inteng-storage.s3.amazonaws.com/img/iea/EBwmdnLL60/sizes/acoustic-audio_resize_md.jpg" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'systems' ? 'selected' : 'tab-text'} style={divstyles}>Sound Systems</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('tablet')}>
                  <div className="border" style={divstyle}>
                    <img src="https://brain-images-ssl.cdn.dixons.com/3/4/10197643/u_10197643.jpg" alt="Tablet" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'tablet' ? 'selected' : 'tab-text'} style={divstyles}>Tablets</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('gaming')}  >
                  <div className="border" style={divstyle}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81f4ZAbIp7L._SL1500_.jpg" alt="Gaming" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'gaming' ? 'selected' : 'tab-text'} style={divstyles}>Gaming</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* desktop view */}

      
      <div className="p-4 rounded mb-4 categories-container">
        {renderView()}
      </div>
    </section>
  )
}

export default ProductGroup

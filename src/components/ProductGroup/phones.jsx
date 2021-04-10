/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import BrandNew from './brand-new';
import UkUsed from './uk-used';
import { getAllProducts } from "../../functions/products";

const Phones = () => {
  const [currentTab, setCurrentTab] = useState('brandnew');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderView = () => {
    if (currentTab === 'brandnew') {
      return <BrandNew
        products={products}
        loading={loading}
      />;
    }
    if (currentTab === 'ukused') {
      return <UkUsed
        products={products}
        loading={loading}
      />;
    }
  }

  const fetchAllProducts = () => {
    setLoading(true);
    getAllProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <nav class="nav nav-pills nav-justified">
        <a class={`nav-item nav-link mr-2 text-left ${currentTab === 'brandnew' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('brandnew')} >Brand New</a>
        <a class={`nav-item nav-link ml-02text-left ${currentTab === 'ukused' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('ukused')} >Premium UK-Used</a>


      </nav>
      {/* <div className="container">
        <div className="row">
          <div className={`col-6 col-md-6 col-lg-6 ${currentTab === 'brandnew' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('brandnew')}>
            <div className="">
              <Link to="#" data-toggle="tab" className="p-3 text-reset show ">Brand New</Link>
            </div>

          </div>
          <div className={`col-6 col-md-6 col-lg-6 ${currentTab === 'ukused' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('ukused')}>
            <div className="">
              <Link to="#" data-toggle="tab" className="p-3 text-reset show ">Uk Used</Link>
            </div>

          </div>
        </div>
      </div> */}

      <div className="" style={{ paddingTop: "1%" }}>
        {renderView()}
      </div>
    </>
  )


}

export default Phones

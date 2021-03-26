/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BrandNew from './brand-new';
import UkUsed from './uk-used';
import { getBrandNew, getUkUsed } from "../../functions/products";

const Phones = () => {
  const [currentTab, setCurrentTab] = useState('brandnew');
  const [pageNumberNew, setPageNumberNew] = useState(0);
  const [pageNumberUsed, setPageNumberUsed] = useState(0);
  const [newtotalPages, setNewTotalPages] = useState(0);
  const [totalNew, setTotalNew] = useState(0);
  const [totalUsed, setTotalUsed] = useState(0);
  const [usedtotalPages, setUsedTotalPages] = useState(0);
  const [brandnew, setBrandNew] = useState([]);
  const [ukused, setUkUsed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsPerPage] = useState(20);

  const lastProduct = pageNumberNew * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const currentProducts = brandnew.slice(firstProduct, lastProduct);
  const currentProduct = ukused.slice(firstProduct, lastProduct);
  const renderView = () => {
    if (currentTab === 'brandnew') {
      return <BrandNew
        products={brandnew}
        loading={loading}
        total={newtotalPages}
        pageNumber={pageNumberNew}
        count={setPageNumberNew}
        totalnew={totalNew}
        firstProduct={firstProduct}
        currentProducts={currentProducts}
      />;
    }
    if (currentTab === 'ukused') {
      return <UkUsed
        products={ukused}
        loading={loading}
        total={usedtotalPages}
        pageNumber={pageNumberUsed}
        count={setPageNumberUsed}
        totalused={totalUsed}
        firstProduct={firstProduct}
        currentProducts={currentProduct}
      />;
    }
  }

  const loadBrandNew = () => {
    setLoading(true);
    getBrandNew(pageNumberNew).then((res) => {
      setBrandNew(res.data.products);
      setNewTotalPages(res.data.totalPages)
      setTotalNew(res.data.total);
      setLoading(false);
    });
  };

  const loadUkUsed = () => {
    setLoading(true);
    getUkUsed(pageNumberUsed).then((res) => {
      setUkUsed(res.data.products);
      setUsedTotalPages(res.data.totalPages)
      setTotalUsed(res.data.total)
      setLoading(false);
    });
  };

  useEffect(() => {
    loadBrandNew();
  }, [pageNumberNew]);

  useEffect(() => {
    loadUkUsed();
  }, [pageNumberUsed]);

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

      <div className="" style={{paddingTop:"1%"}}>
        {renderView()}
      </div>
    </>
  )


}

export default Phones

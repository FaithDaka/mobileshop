/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
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
      />;
    }
  }

  const textstyle = {
    fontSize: "15px",
  }
  const containerstyle = {
    borderBottom: "gray-solid",
    borderRight: "gray-solid",
    borderWidth: "thin",
  }
  const containerstyles = {
    borderBottom: "gray-solid",
    borderWidth: "thin",
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
      <div className="container" style={{paddingTop:"2%"}} >
        <div className="row">
          <div className={`col-6 col-md-6 col-lg-6 ${currentTab === 'brandnew' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('brandnew')}>
            <div className="">
              <a href="#" data-toggle="tab" className="p-3 fs-16 fw-600 text-reset show " style={{color:"red"}}>Brand New</a>
            </div>

          </div>
          <div className={`col-6 col-md-6 col-lg-6 ${currentTab === 'ukused' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('ukused')}>
            <div className="">
              <a href="#" data-toggle="tab" className="p-3 fs-16 fw-600 text-reset show " style={{color:"red"}}>Uk Used</a>
            </div>

          </div>
        </div>
      </div>

      <div className="" style={{paddingTop:"1%"}}>
        {renderView()}
      </div>
    </>
  )


}

export default Phones

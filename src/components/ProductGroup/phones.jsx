/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import BrandNew from './brand-new';
import UkUsed from './uk-used';
import { getBrandNew, getUkUsed } from "../../functions/products";

const Phones = () => {
  const [currentTab, setCurrentTab] = useState('brandnew');
  const [pageNumber, setPageNumber] = useState(1);
  const [newtotalPages, setNewTotalPages] = useState(0);
  const [usedtotalPages, setUsedTotalPages] = useState(0);
  const [brandnew, setBrandNew] = useState([]);
  const [ukused, setUkUsed] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderView = () => {
    if (currentTab === 'brandnew') {
      return <BrandNew products={brandnew} loading={loading} total={newtotalPages} />;
    }
    if (currentTab === 'ukused') {
      return <UkUsed products={ukused} loading={loading} total={usedtotalPages} />;
    }
  }

  const textstyle = {
    fontSize: "12px",
  }

  const loadBrandNew = () => {
    setLoading(true);
    getBrandNew(pageNumber).then((res) => {
      setBrandNew(res.data.products);
      setNewTotalPages(res.data.totalPages)
      setLoading(false);
    });
  };

  const loadUkUsed = () => {
    setLoading(true);
    getUkUsed(pageNumber).then((res) => {
      setUkUsed(res.data.products);
      setUsedTotalPages(res.data.totalPages)
      setLoading(false);
    });
  };

  useEffect(() => {
    loadBrandNew();
    loadUkUsed();
  }, [pageNumber]);

  return (
    <>
      <div>
        <div className="row">
          <div className="col-6 col-md-6 col-lg-6">
            <a href="#" className={currentTab === 'brandnew' ? 'select' : 'tabtext'}
              onClick={() => setCurrentTab('brandnew')} style={textstyle}>Brand New</a>
          </div>
          <div className="col-6 col-md-6 col-lg-6">
            <a href="#" className={currentTab === 'ukused' ? 'select' : 'tabtext'} onClick={() => setCurrentTab('ukused')} style={textstyle}>UK Used</a>
          </div>
        </div>
      </div>
      <div className="">
        {renderView()}
      </div>
    </>
  )


}

export default Phones

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import BrandNew from './brand-new';
import UkUsed from './uk-used';
import { getAllProducts } from "../../functions/products";
import Helmet from 'react-helmet';


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
    <Helmet>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    </Helmet>
      <nav class="nav nav-pills nav-justified tablist">
        <a id='bnew' class={`nav-item nav-link mr-0 pr-0 text-center ${currentTab === 'brandnew' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('brandnew')} >Brand New </a>
        <a id='uused' class={`nav-item nav-link ml-0 pl-0 text-center ${currentTab === 'ukused' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('ukused')} >Premium UK-Used </a>


      </nav>

      <div className="" style={{ paddingTop: "1%" }}>
        {renderView()}
      </div>
    </>
  )


}

export default Phones

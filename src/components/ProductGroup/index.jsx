/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import BrandNew from './brand-new';
import UkUsed from './uk-used';
import Accessories from './accessories';
import Televisions from './televisons';
import Gaming from './gaming';
import Laptop from './laptops';
import LoadSpinner from '../../components/Spinner';

import './styles.css';

const ProductGroup = ({ products, loading }) => {
  const [currentTab, setCurrentTab] = useState('brandnew');

  const renderView = () => {
    if (currentTab === 'brandnew') {
      return <BrandNew products={products} />;
    }
    if (currentTab === 'ukused') {
      return <UkUsed products={products} />;
    }
    if (currentTab === 'accessories') {
      return <Accessories products={products} />;
    }
    if (currentTab === 'televisions') {
      return <Televisions products={products} />;
    }
    if (currentTab === 'laptops') {
      return <Laptop products={products} />;
    }
    if (currentTab === 'gaming') {
      return <Gaming products={products} />;
    }
  };

  return (
    <section className="d-xl-none d-lg-block mb-3">
      {loading && <LoadSpinner />}
      <div className="container">
        <OwlCarousel items={3} className="owl-them mb-3" loop autoplay dots={false} autoplayTimeout={3000}>
          <a href="#" className={currentTab === 'brandnew' ? 'selected' : 'tab-text'}
            onClick={() => setCurrentTab('brandnew')}>Brand New</a>
          <a href="#" className={currentTab === 'ukused' ? 'selected' : 'tab-text'} onClick={() => setCurrentTab('ukused')}>UK Used</a>
          <a href="#" className={currentTab === 'accessories' ? 'selected' : 'tab-text'} onClick={() => setCurrentTab('accessories')}>Accessories</a>
          <a href="#" className={currentTab === 'televisions' ? 'selected' : 'tab-text'} onClick={() => setCurrentTab('televisions')}>Televisions</a>
          <a href="#" className={currentTab === 'laptops' ? 'selected' : 'tab-text'} onClick={() => setCurrentTab('laptops')}>Laptops</a>
          <a href="#" className={currentTab === 'gaming' ? 'selected' : 'tab-text'} onClick={() => setCurrentTab('gaming')}>Gaming</a>
        </OwlCarousel>

        <div className="">
          {renderView()}
        </div>

      </div>
    </section>
  )
}

export default ProductGroup

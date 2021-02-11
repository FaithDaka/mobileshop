
import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Product from '../Product'
import LoadSpinner from '../../components/Spinner';

const ProductGroup = ({ products, loading }) => {

  return (
    <section className="mb-4">
      {loading && <LoadSpinner />}
      <div className="container">

        <Tabs>
          <TabList>
            <div className="bg-white shadow-sm rounded">
              <div className="nav border-bottom aiz-nav-tabs d-flex align-items-stretch justify-content-around">
                <Tab className="p-2 fs-16 fw-600 text-reset show active">Brand New</Tab>
                <Tab className="p-2 fs-16 fw-600 text-reset">UK Used</Tab>
                <Tab className="p-2 fs-16 fw-600 text-reset">Accessories</Tab>
              </div>
            </div>
          </TabList>

          <TabPanel>
            <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
              {products.filter(product =>
                product.condition === 'Brand New').map(filteredProducts => (
                  <Product product={filteredProducts} />
                ))}
            </div>
            <div className="aiz-pagination aiz-pagination-center mb-4" />
          </TabPanel>
          <TabPanel>
            <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
              {products.filter(product =>
                product.condition === 'Uk Used').map(filteredProducts => (
                  <Product product={filteredProducts} />
                ))}
            </div>
            <div className="aiz-pagination aiz-pagination-center mb-4" />
          </TabPanel>
          <TabPanel>
            <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
              {products.filter(product =>
                product.condition === 'Accessories').map(filteredProducts => (
                  <Product product={filteredProducts} />
                ))}
            </div>
            <div className="aiz-pagination aiz-pagination-center mb-4" />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default ProductGroup

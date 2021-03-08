import React, { useEffect, useState } from "react";
import Footer from '../../components/Layout/Footer/index'
import BottomFooter from '../../components/Layout/Footer/BottomFooter'
import Banner from './Banner'
import Promos from './Promos'
import ProductGroup from '../../components/ProductGroup'

const HomePage = () => {

  return (
    <>
      <Banner />
      {/* <Promos /> */}
      <ProductGroup />
      <Footer />
      <BottomFooter />

    </>
  )
}

export default HomePage

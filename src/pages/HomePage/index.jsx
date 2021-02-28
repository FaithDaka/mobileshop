import React, { useEffect, useState } from "react";

import Banner from './Banner'
import Promos from './Promos'
import ProductGroup from '../../components/ProductGroup'
import { getProducts } from "../../functions/products";

const HomePage = () => {

  return (
    <>
      <Banner />
      {/* <Promos /> */}
      <ProductGroup />

    </>
  )
}

export default HomePage

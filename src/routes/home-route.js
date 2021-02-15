import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import Cart from '../pages/Cart';
import Search from '../pages/Search';
import Checkout from '../pages/Checkout';
import BuyNow from '../pages/Checkout/BuyNow';
import Receipt from '../pages/Checkout/Receipt';
import Categories from '../pages/Search/Categories';
import ProductDetails from '../pages/ProductDetails';

const HomeRoute = () => {

  return(
  <Switch>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/buynow" component={BuyNow} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/receipt" component={Receipt} />
      <Route exact path="/search" component={Search} /> 
      <Route exact path="/products/:slug" component={ Categories } />      
    </Layout>
  </Switch>
    )}

export default HomeRoute
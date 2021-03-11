import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Spinner from '../components/Spinner';

const HomePage = lazy(() => import("../pages/HomePage"));
const Cart = lazy(() => import("../pages/Cart"));
const Search = lazy(() => import("../pages/Search"));
const Checkout = lazy(() => import("../pages/Checkout"));
const BuyNow = lazy(() => import("../pages/Checkout/BuyNow"));
const Receipt = lazy(() => import("../pages/Checkout/Receipt"));
const Categories = lazy(() => import("../pages/Search/Categories"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Aboutus = lazy(() => import("../pages/Links/about-us"));
const FAQS = lazy(() => import("../pages/Links/faqs"));
const Terms = lazy(() => import("../pages/Links/terms"));

const HomeRoute = () => {

  return(
    <Suspense fallback={<div><Spinner /></div>}>
  <Switch>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/buynow" component={BuyNow} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/receipt" component={Receipt} />
      <Route exact path="/search" component={Search} /> 
      <Route exact path="/aboutus" component={Aboutus} /> 
      <Route exact path="/faqs" component={FAQS} /> 
      <Route exact path="/terms" component={Terms} /> 
      <Route exact path="/products/:slug" component={ Categories } />      
    </Layout>
  </Switch>
  </Suspense>
    )}

export default HomeRoute
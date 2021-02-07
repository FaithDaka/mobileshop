import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Cart from '../pages/Cart';

const ShopRoute = () => (
  <Switch>
    <Layout>
      <Route exact path="/shop/cart" component={Cart} />    
    </Layout>
  </Switch>
    )

export default ShopRoute
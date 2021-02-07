import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../admin/Layout';
import Dashboard from '../admin/pages/Dashboard'
import AddProduct from '../admin/pages/Products/AddProducts'
import ListProduct from '../admin/pages/Products/ProductsList.jsx'

const AdminRoutes = () => (
  <Switch>
    <Layout>
      <Route exact path="/admin/dashboard" component={Dashboard} />
      <Route exact path="/admin/addproduct" component={AddProduct} />
      <Route exact path="/admin/listproduct" component={ListProduct} />
                
    </Layout>
  </Switch>
    )

export default AdminRoutes
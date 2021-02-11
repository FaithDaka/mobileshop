import React from 'react';
import { Switch } from 'react-router-dom';
import AdminRoute from './AdminRoute'

import Layout from '../admin/Layout';
import Dashboard from '../admin/pages/Dashboard'
import AddProduct from '../admin/pages/Products/AddProducts'
import ListProduct from '../admin/pages/Products/ProductsList.jsx'
import ListOrders from '../admin/pages/Orders/OrdersList'
import OrderDetails from '../admin/pages/Orders/OrderDetails'
import ListCustomers from '../admin/pages/Customers/customersList'

const AdminRoutes = () => (
  <Switch>
    <Layout>
      <AdminRoute exact path="/admin/dashboard" component={Dashboard} />
      <AdminRoute exact path="/admin/addproduct" component={AddProduct} />
      <AdminRoute exact path="/admin/listproduct" component={ListProduct} />
      <AdminRoute exact path="/admin/customers" component={ListCustomers} />  
      <AdminRoute exact path="/admin/listorders" component={ListOrders} /> 
      <AdminRoute exact path="/admin/order/:id" component={OrderDetails} /> 
    </Layout>
  </Switch>
    )

export default AdminRoutes;
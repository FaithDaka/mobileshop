import React from 'react';
import { Switch } from 'react-router-dom';
import AdminRoute from './AdminRoute'

import Layout from '../admin/Layout';
import Dashboard from '../admin/pages/Dashboard'
import AddProduct from '../admin/pages/Products/AddProducts'
import EditProduct from '../admin/pages/Products/EditProducts'
import ListProduct from '../admin/pages/Products/ProductsList.jsx'
import ListOrders from '../admin/pages/Orders/OrdersList'
import OrderDetails from '../admin/pages/Orders/OrderDetails'
import ListCustomers from '../admin/pages/Customers/customersList'
import AddCategory from '../admin/pages/Categories/AddCategory'
import EditCategory from '../admin/pages/Categories/EditCategory'
import ListCategories from '../admin/pages/Categories/CategoriesList'
import ListBrands from '../admin/pages/Brands/BrandsList'
import AddBrand from '../admin/pages/Brands/AddBrands'
import EditBrand from '../admin/pages/Brands/EditBrands'

const AdminRoutes = () => (
  <Switch>
    <Layout>
      <AdminRoute exact path="/admin/dashboard" component={Dashboard} />
      <AdminRoute exact path="/admin/addproduct" component={AddProduct} />
      <AdminRoute exact path="/admin/update/:id" component={EditProduct} />
      <AdminRoute exact path="/admin/listproduct" component={ListProduct} />
      <AdminRoute exact path="/admin/customers" component={ListCustomers} />  
      <AdminRoute exact path="/admin/listorders" component={ListOrders} /> 
      <AdminRoute exact path="/admin/order/:id" component={OrderDetails} /> 
      <AdminRoute exact path="/admin/addcategory" component={AddCategory} />
      <AdminRoute exact path="/admin/category/:slug" component={EditCategory} /> 
      <AdminRoute exact path="/admin/brand/:slug" component={EditBrand} /> 
      <AdminRoute exact path="/admin/categories" component={ListCategories} />
      <AdminRoute exact path="/admin/brands" component={ListBrands} />
      <AdminRoute exact path="/admin/addbrand" component={AddBrand} />
    </Layout>
  </Switch>
    )

export default AdminRoutes;
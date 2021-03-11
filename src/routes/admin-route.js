import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import AdminRoute from './AdminRoute'
import Spinner from '../components/Spinner';

import Layout from '../admin/Layout';

const Dashboard = lazy(() => import("../admin/pages/Dashboard"));
const AddProduct = lazy(() => import("../admin/pages/Products/AddProducts"));
const EditProduct = lazy(() => import("../admin/pages/Products/EditProducts"));
const ListProduct = lazy(() => import("../admin/pages/Products/ProductsList.jsx"));
const ListOrders = lazy(() => import("../admin/pages/Orders/OrdersList"));
const OrderDetails = lazy(() => import("../admin/pages/Orders/OrderDetails"));
const ListCustomers = lazy(() => import("../admin/pages/Customers/customersList"));
const AddCategory = lazy(() => import("../admin/pages/Categories/AddCategory"));
const EditCategory = lazy(() => import("../admin/pages/Categories/EditCategory"));
const ListCategories = lazy(() => import("../admin/pages/Categories/CategoriesList"));
const ListBrands = lazy(() => import("../admin/pages/Brands/BrandsList"));
const AddBrand = lazy(() => import("../admin/pages/Brands/AddBrands"));
const EditBrand = lazy(() => import("../admin/pages/Brands/EditBrands"));
const AddAccessory = lazy(() => import("../admin/pages/Accessories/AddAccessory"));
const ListAccessories = lazy(() => import("../admin/pages/Accessories/ListAccessories"));
const EditAccessories = lazy(() => import("../admin/pages/Accessories/EditAccessories"));

const AdminRoutes = () => (
  <Suspense fallback={<div><Spinner /></div>}>
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
      <AdminRoute exact path="/admin/addaccessory" component={AddAccessory} />
      <AdminRoute exact path="/admin/updateaccessory/:id" component={EditAccessories} />
      <AdminRoute exact path="/admin/listaccessories" component={ListAccessories} />
    </Layout>
  </Switch>
  </Suspense>
    )

export default AdminRoutes;
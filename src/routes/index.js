import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import Spinner from '../components/Spinner';
import { isUserLoggedIn } from '../store/actions/auth';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = React.lazy(() => import("./home-route"));
const AdminPages = React.lazy(() => import("./admin-route.js"));

const AppRoot = () => {

  // const dispatch  = useDispatch();
  // const auth = useSelector(state => state.auth);

  // useEffect(() => {
  //   if(!auth.authenticate){
  //     dispatch(isUserLoggedIn());
  //   }

  // }, [auth.authenticate]);

  return (
    <React.Suspense fallback={<div><Spinner /></div>}>
      <ToastContainer />
      <Switch>
        <Route path="/admin" component={AdminPages} />
        <Route path="/" component={HomePage} />
      </Switch>
    </React.Suspense>
  );
};

export default AppRoot;
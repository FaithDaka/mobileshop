import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({
  component,
  path,
  ...rest
}) => {

  const auth = useSelector(state => state.auth);

  return auth.authenticate && auth.isAdmin ? (
    <Route exact path={path} component={component} {...rest} />
  ) : (
      <Redirect to={"/"} />
    );
};

export default AdminRoute;
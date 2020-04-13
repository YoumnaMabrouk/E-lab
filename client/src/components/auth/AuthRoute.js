import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import PropTypes from 'prop-types';
const AuthRoute = props => {
  const { isAuthenticated, type } = props;
  if (type === "guest" && isAuthenticated) return <Redirect to="/AppNavbar" />;
  else if (type === "private" && !isAuthenticated) return <Redirect to="/Experiment" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthenticated }) => ({
  isAuthenticated
});

export default connect(mapStateToProps)(AuthRoute);
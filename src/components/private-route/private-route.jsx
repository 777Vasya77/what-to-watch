import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {selectors} from '~/selectors/selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
  const {component: Component, isAuth} = props;
  const rest = Object.assign({}, props);
  delete rest.component;
  delete rest.isAuth;

  return <Route {...rest}
    render={(routerProps) =>
      isAuth
        ? (<Component {...routerProps} />)
        : (<Redirect to="/login" />)
    }
  />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: selectors.user.isAuth(state)
});

export {PrivateRoute};

export default connect(mapStateToProps)(PrivateRoute);

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {selectors} from '~/selectors/selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
  const {component: Component, isAuth, guest} = props;
  const redirectRoute = guest ? `/` : `/login`;
  const rest = Object.assign({}, props);
  delete rest.component;
  delete rest.isAuth;

  return <Route {...rest}
    render={(routerProps) =>
      (guest ? !isAuth : isAuth)
        ? (<Component {...routerProps} />)
        : (<Redirect to={redirectRoute} />)
    }
  />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
  isAuth: PropTypes.bool.isRequired,
  guest: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuth: selectors.user.isAuth(state)
});

export {PrivateRoute};

export default connect(mapStateToProps)(PrivateRoute);

import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {selectors} from '~/selectors/selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {operations} from "~/operations/oparations";

const PrivateRoute = (props) => {
  const {component: Component, isAuth, guest, checkAuth} = props;
  const redirectRoute = guest ? `/` : `/login`;
  const rest = Object.assign({}, props);
  delete rest.component;
  delete rest.isAuth;

  useEffect(() => {
    checkAuth();
  }, []);

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
  checkAuth: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuth: selectors.user.isAuth(state)
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(operations.user.checkAuth())
});

export {PrivateRoute};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectors} from "~/selectors/selectors";

const PageHeader = (props) => {
  const {isAuth, authUser} = props;
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        {isAuth
          ? <div className="user-block__avatar">
            <img src={authUser.fullAvatarUrl} alt={authUser.name} width="63" height="63"/>
          </div>
          : `Sign In`}
      </div>
    </header>
  );
};

export {PageHeader};

PageHeader.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  authUser: PropTypes.object
};

const mapStateToProps = (state) => ({
  isAuth: selectors.user.isAuth(state),
  authUser: selectors.user.getAuthUser(state),
});

export default connect(mapStateToProps)(PageHeader);

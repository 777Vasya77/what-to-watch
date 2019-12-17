import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {selectors} from "~/selectors/selectors";
import {connect} from "react-redux";

const UserBlock = (props) => {
  const {isAuth, authUser} = props;
  return (
    <div className="user-block">
      {isAuth
        ? <div className="user-block__avatar">
          <Link to="/mylist">
            <img src={authUser.fullAvatarUrl} alt={authUser.name} width="63" height="63"/>
          </Link>
        </div>
        : <Link to='/login' style={{color: `unset`}}>Sign In</Link>}
    </div>
  );
};

export {UserBlock};

UserBlock.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  authUser: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuth: selectors.user.isAuth(state),
  authUser: selectors.user.getAuthUser(state),
});

export default connect(mapStateToProps)(UserBlock);

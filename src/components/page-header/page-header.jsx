import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectors} from '~/selectors/selectors';
import {Link} from 'react-router-dom';
import Breadcrumbs from "~/components/breadcrumbs/breadcrumbs";
import Logo from "~/components/logo/logo";

const PageHeader = (props) => {
  const {isAuth, authUser, breadcrumbs, film} = props;
  return (
    <header className="page-header movie-card__head">
      <Logo />

      {breadcrumbs && <Breadcrumbs filmId={film.id} title={film.name}/>}

      <div className="user-block">
        {isAuth
          ? <div className="user-block__avatar">
            <Link to="/">
              <img src={authUser.fullAvatarUrl} alt={authUser.name} width="63" height="63"/>
            </Link>
          </div>
          : <Link to='/login'>Sign In</Link>}
      </div>
    </header>
  );
};

export {PageHeader};

PageHeader.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  authUser: PropTypes.object,
  film: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
  }),
  breadcrumbs: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuth: selectors.user.isAuth(state),
  authUser: selectors.user.getAuthUser(state),
});

export default connect(mapStateToProps)(PageHeader);

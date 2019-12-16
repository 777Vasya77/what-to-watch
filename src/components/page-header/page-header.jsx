import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectors} from '~/selectors/selectors';
import Breadcrumbs from "~/components/breadcrumbs/breadcrumbs";
import Logo from "~/components/logo/logo";
import UserBlock from "~/components/user-block/user-block";

const PageHeader = (props) => {
  const {breadcrumbs, film} = props;
  return (
    <header className="page-header movie-card__head">
      <Logo />

      {breadcrumbs && <Breadcrumbs filmId={film.id} title={film.name}/>}

      <UserBlock />
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

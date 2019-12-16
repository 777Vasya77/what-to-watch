import React from 'react';
import PageHeader from '~/components/page-header/page-header';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {operations} from "~/operations/oparations";
import {selectors} from "~/selectors/selectors";
import {Link} from "react-router-dom";

const MovieCardHero = (props) => {
  const {film, toggleFavorite, isAuth} = props;

  const _handlerFavoriteButtonClick = () => {
    const status = (film.isFavorite) ? 0 : 1;
    film.isFavorite = !film.isFavorite;
    toggleFavorite(film.id, status);
  };

  return (
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.genre}</span>
            <span className="movie-card__year">{film.released}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button" onClick={_handlerFavoriteButtonClick}>
              {
                film.isFavorite
                  ? <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list" />
                  </svg> : <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
              }
              <span>My list</span>
            </button>
            { isAuth && <Link to={`/films/${film.id}/review`} className="btn movie-card__button">Add review</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCardHero.propTypes = {
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
  }).isRequired,
  toggleFavorite: PropTypes.func,
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state, props) => {
  const {film} = props;
  return {
    isAuth: selectors.user.isAuth(state),
    isFavorite: selectors.films.isFavoriteSelector(state, film.id),
  };
};

const mapDispatchToState = (dispatch) => ({
  toggleFavorite: (filmId, status) => dispatch(operations.user.toggleFavorite(filmId, status))
});

export {MovieCardHero};

export default connect(mapStateToProps, mapDispatchToState)(MovieCardHero);

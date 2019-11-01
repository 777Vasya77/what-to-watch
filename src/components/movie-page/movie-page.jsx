import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Tabs from '~/components/tabs/tabs';
import MovieCardHero from '~/components/movie-card-hero/movie-card-hero';
import MoviesList from "~/components/movies-list/movies-list";

const MoviePage = (props) => {
  const {film, similarFilms} = props;

  return (
    <Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: film.backgroundColor}}>

        <MovieCardHero film={film}/>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <Tabs
                  activeTabName={`Overview`}
                  filmId={film.id}
                />
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{film.ratingWithComma}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{film.ratingLevel}</span>
                  <span className="movie-rating__count">{film.scoresCount} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{film.description}</p>

                <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {film.starringString} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList filmsList={similarFilms}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
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
  similarFilms: PropTypes.arrayOf(PropTypes.exact({
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
  })).isRequired,
};

export default MoviePage;

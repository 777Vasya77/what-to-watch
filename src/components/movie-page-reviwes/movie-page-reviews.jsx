import React, {Fragment} from 'react';
import MovieCardHero from '~/components/movie-card-hero/movie-card-hero';
import PropTypes from 'prop-types';
import Tabs from '~/components/tabs/tabs';
import MoviesList from "~/components/movies-list/movies-list";

const Column = {
  LEFT: `left`,
  RIGHT: `right`,
};

const MoviePageReviews = (props) => {
  const {film, comments, similarFilms} = props;

  const commentsRender = (column) => {
    const n = (column === Column.RIGHT) ? 1 : 0;

    return comments.map((comment, index) => index % 2 === n && (
      <div className="review" key={comment.id}>
        <blockquote className="review__quote">
          <p className="review__text">{comment.body}</p>

          <footer className="review__details">
            <cite className="review__author">{comment.user.name}</cite>
            <time className="review__date" dateTime={comment.dateTime}>{comment.formattedDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{comment.ratingWithComma}</div>
      </div>
    ));
  };

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
                  activeTabName={`Reviews`}
                  filmId={film.id}
                />
              </nav>

              <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                  {commentsRender(Column.LEFT)}
                </div>
                <div className="movie-card__reviews-col">
                  {commentsRender(Column.RIGHT)}
                </div>
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

MoviePageReviews.propTypes = {
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
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
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

export default MoviePageReviews;

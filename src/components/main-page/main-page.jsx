import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '~/components/movies-list/movies-list';
import GenresList from '~/components/genres-list/genres-list';
import PageHeader from '~/components/page-header/page-header';
import PageFooter from '~/components/page-footer/page-footer';
import ShowMore from '~/components/show-more/show-more';
import * as actions from '~/actions/films/films';
import * as filmsSelectors from '~/reducers/films/films';

const MainPage = (props) => {
  const {filmsList, genres, activeGenreFilter, onGenreLinkClick} = props;
  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres={genres}
            activeGenreFilter={activeGenreFilter}
            onGenreLinkClick={onGenreLinkClick}
          />

          <MoviesList filmsList={filmsList} />

          <ShowMore />
        </section>

        <PageFooter />
      </div>
    </Fragment>
  );
};

MainPage.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.exact({
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
  genres: PropTypes.array.isRequired,
  activeGenreFilter: PropTypes.string.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (filter) => dispatch(actions.setGenreFilter(filter))
});

const mapStateToProps = (state) => ({
  genres: state.films.genres,
  activeGenreFilter: filmsSelectors.getActiveGenre(state),
});

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


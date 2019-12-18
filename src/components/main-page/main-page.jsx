import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '~/components/movies-list/movies-list';
import GenresList from '~/components/genres-list/genres-list';
import PageFooter from '~/components/page-footer/page-footer';
import ShowMore from '~/components/show-more/show-more';
import {actions} from '~/actions/actions';
import withActiveItem from '~/hocs/with-active-item/with-active-item';
import {selectors} from '~/selectors/selectors';
import MovieCardHero from '~/components/movie-card-hero/movie-card-hero';

const MoviesListWrapped = withActiveItem(MoviesList);

const MainPage = (props) => {
  const {
    filmsList,
    genres,
    activeGenreFilter,
    onGenreLinkClick,
    onShowMoreClick,
    isAllFilmsLoaded,
    promoFilm
  } = props;

  return (
    <Fragment>

      <MovieCardHero film={promoFilm} mainPage/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres={genres}
            activeGenreFilter={activeGenreFilter}
            onGenreLinkClick={onGenreLinkClick}
          />

          <MoviesListWrapped filmsList={filmsList} />

          {!isAllFilmsLoaded && <ShowMore onShowMoreClick={onShowMoreClick}/>}
        </section>

        <PageFooter />
      </div>
    </Fragment>
  );
};

const filmValidateRules = {
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
  previewVideoLink: PropTypes.string
};

MainPage.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.exact(filmValidateRules)).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenreFilter: PropTypes.string.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  isAllFilmsLoaded: PropTypes.bool.isRequired,
  promoFilm: PropTypes.exact(filmValidateRules).isRequired,
};

const mapStateToProps = (state) => ({
  genres: selectors.films.genresSelector(state),
  activeGenreFilter: selectors.films.activeGenreSelector(state),
  isAllFilmsLoaded: selectors.films.isAllFilmsLoadedSelector(state),
  promoFilm: selectors.films.getPromoFilmSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (filter) => {
    dispatch(actions.films.setGenreFilter(filter));
    dispatch(actions.films.resetFilmsPerPage());
  },
  onShowMoreClick: (perPage) => dispatch(actions.films.setFilmsPerPage(perPage))
});

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


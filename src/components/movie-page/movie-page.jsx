import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Tabs from '~/components/tabs/tabs';
import MovieCardHero from '~/components/movie-card-hero/movie-card-hero';
import MoviesList from '~/components/movies-list/movies-list';
import PageFooter from '~/components/page-footer/page-footer';
import TabContent from '~/components/tab-content/tab-content';
import withActiveItem from "~/hocs/with-active-item/with-active-item";

const MoviesListWrapped = withActiveItem(MoviesList);

const MoviePage = (props) => {
  const {film, similarFilms, comments, activeItem: activeTab, onChangeActiveItem} = props;

  const getInitialActiveTab = () => {
    return location.hash.split(`#`).slice(-1)[0] || `overview`;
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
                  onTabChange={onChangeActiveItem}
                  activeTabName={activeTab || getInitialActiveTab()}
                />
              </nav>

              <TabContent tab={activeTab || getInitialActiveTab()} film={film} comments={comments}/>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesListWrapped filmsList={similarFilms}/>
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

MoviePage.propTypes = {
  film: PropTypes.exact(filmValidateRules).isRequired,
  similarFilms: PropTypes.arrayOf(PropTypes.exact(filmValidateRules)).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
};

export default MoviePage;

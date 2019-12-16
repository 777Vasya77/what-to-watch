import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Logo from '~/components/logo/logo';
import PageFooter from '~/components/page-footer/page-footer';
import UserBlock from '~/components/user-block/user-block';
import {connect} from "react-redux";
import {selectors} from "~/selectors/selectors";
import {operations} from "~/operations/oparations";
import Loader from "~/components/loader/loader";
import MoviesList from "~/components/movies-list/movies-list";

class MyList extends PureComponent {
  componentDidMount() {
    const {loadFavoriteFilms, films, isLoading} = this.props;

    if (!films.length && !isLoading) {
      loadFavoriteFilms();
    }
  }

  render() {
    const {films, isLoading} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {
            isLoading
              ? <Loader />
              : <MoviesList filmsList={films} />
          }
        </section>

        <PageFooter />
      </div>
    );
  }

}

MyList.propTypes = {
  loadFavoriteFilms: PropTypes.func,
  films: PropTypes.arrayOf(PropTypes.exact({
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
  })),
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoading: selectors.user.myFilmListIsLoading(state),
  films: selectors.user.myFilmListSelectors(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms: () => dispatch(operations.user.loadFavoriteFilms())
});

export {MyList};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: {}
    };

    this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
    this._handleMovieCardMouseLeave = this._handleMovieCardMouseLeave.bind(this);
  }

  _handleMovieCardMouseEnter(film) {
    this.setState({
      activeMovieCard: film
    });
  }

  _handleMovieCardMouseLeave() {
    this.setState({
      activeMovieCard: {}
    });
  }

  render() {
    const {filmsList} = this.props;

    return (
      <div className="catalog__movies-list">
        {filmsList.map((film) => {
          return (
            <SmallMovieCard
              film={film}
              onMovieCardMouseEnter={this._handleMovieCardMouseEnter}
              onMovieCardMouseLeave={this._handleMovieCardMouseLeave}
              key={film.id}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
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
  })).isRequired
};

export default MoviesList;

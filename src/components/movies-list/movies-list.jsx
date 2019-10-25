import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: {}
    };

    this._handleCardLinkMouseEnter = this._handleCardLinkMouseEnter.bind(this);
  }

  _handleCardLinkMouseEnter(film) {
    this.setState({
      activeMovieCard: film
    });
  }

  render() {
    const {filmsList} = this.props;

    return (
      <div className="catalog__movies-list">
        {filmsList.map((film, index) => {
          return (
            <SmallMovieCard
              film={film}
              onCardLinkMouseEnter={this._handleCardLinkMouseEnter}
              key={`${film.title}-${index}`}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default MoviesList;

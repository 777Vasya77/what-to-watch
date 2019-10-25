import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {film, onCardLinkMouseEnter} = props;
  const {title, image} = film;

  const handleCardLinkMouseEnter = () => onCardLinkMouseEnter(film);

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/${image}`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onMouseEnter={handleCardLinkMouseEnter}>{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.exact({
    title: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  onCardLinkMouseEnter: PropTypes.func.isRequired
};

export default SmallMovieCard;

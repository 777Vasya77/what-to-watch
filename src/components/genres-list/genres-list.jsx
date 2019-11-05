import React from 'react';
import PropTypes from 'prop-types';

const GenresList = ({genres, activeGenreFilter, onGenreLinkClick}) => {
  const handleGenreLinkClick = (evt) => {
    evt.preventDefault();
    const currentGenre = evt.target.text;

    onGenreLinkClick(currentGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${activeGenreFilter === genre && `catalog__genres-item--active`}`}>
          <a href="#" className="catalog__genres-link" onClick={handleGenreLinkClick}>{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  activeGenreFilter: PropTypes.string.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

export default GenresList;

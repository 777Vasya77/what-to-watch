import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectors} from '~/selectors/selectors';

const GenresList = ({genres, activeGenreFilter, onGenreLinkClick, loading}) => {
  const handleGenreLinkClick = (evt) => {
    evt.preventDefault();
    const currentGenre = evt.target.text;

    onGenreLinkClick(currentGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {!loading && genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${activeGenreFilter === genre && `catalog__genres-item--active`}`}>
          <a href="#" className="catalog__genres-link" onClick={handleGenreLinkClick}>{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  activeGenreFilter: PropTypes.string.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: selectors.films.loading(state)
});

export {GenresList};

export default connect(mapStateToProps)(GenresList);

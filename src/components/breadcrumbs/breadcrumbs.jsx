import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';


const Breadcrumbs = (props) => {
  const {filmId, title} = props;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${filmId}`} className="breadcrumbs__link">{title}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  filmId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Breadcrumbs;

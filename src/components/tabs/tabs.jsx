import React from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const {activeTabName, filmId} = props;
  const tabs = [
    {name: `Overview`, link: `?id=${filmId}&tab=overview`},
    {name: `Details`, link: `?id=${filmId}&tab=details`},
    {name: `Reviews`, link: `?id=${filmId}&tab=reviews`},
  ];

  return (
    <ul className="movie-nav__list">
      {tabs.map(({name, link}) => (
        <li key={name} className={`movie-nav__item ${name === activeTabName && `movie-nav__item--active`}`}>
          <a href={link} className="movie-nav__link">{name}</a>
        </li>
      ))}
    </ul>
  );
};

Tabs.propTypes = {
  activeTabName: PropTypes.string.isRequired,
  filmId: PropTypes.number.isRequired,
};

export default Tabs;

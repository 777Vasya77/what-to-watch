import React from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const {activeTabName, onTabChange} = props;

  const tabs = [
    {name: `overview`, link: `#overview`},
    {name: `details`, link: `#details`},
    {name: `reviews`, link: `#reviews`},
  ];

  const handleTabChange = (evt) => {
    const tabName = evt.target.dataset.tabName;
    onTabChange(tabName);
  };

  const capitalizeTabName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <ul className="movie-nav__list">
      {tabs.map(({name, link}) => (
        <li key={name} className={`movie-nav__item ${name === activeTabName && `movie-nav__item--active`}`}>
          <a href={link} className="movie-nav__link" data-tab-name={name} onClick={handleTabChange}>{capitalizeTabName(name)}</a>
        </li>
      ))}
    </ul>
  );
};

Tabs.propTypes = {
  activeTabName: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Tabs;

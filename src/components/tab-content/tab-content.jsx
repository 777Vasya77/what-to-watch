import React from 'react';
import PropTypes from 'prop-types';
import MoviePageDetails from '~/components/movie-page-details/movie-page-details';
import MoviePageReviews from '~/components/movie-page-reviwes/movie-page-reviews';
import MoviePageOverview from '~/components/movie-page-overview/movie-page-overview';

const TabContent = (props) => {
  const {tab, film, comments} = props;
  const components = {
    overview: MoviePageOverview,
    details: MoviePageDetails,
    reviews: MoviePageReviews
  };
  const Component = components[tab] || `overview`;

  return <Component film={film} comments={comments}/>;
};

TabContent.propTypes = {
  tab: PropTypes.oneOf([`details`, `overview`, `reviews`]).isRequired,
  film: PropTypes.exact({
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
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};

export default TabContent;

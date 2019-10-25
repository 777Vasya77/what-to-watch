import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '~/components/main-page/main-page';

const App = (props) => {
  const {filmsList} = props;
  return <MainPage filmsList={filmsList}/>;
};

App.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

export default App;

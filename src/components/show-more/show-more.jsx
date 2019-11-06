import React from 'react';
import PropTypes from 'prop-types';

const LOADED_COUNT = 20;

const ShowMore = (props) => {
  const {onShowMoreClick} = props;
  const handlerShowMoreClick = () => {
    onShowMoreClick(LOADED_COUNT);
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handlerShowMoreClick}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

export default ShowMore;

import React from 'react';
import PropTypes from 'prop-types';

const Column = {
  LEFT: `left`,
  RIGHT: `right`,
};

const MoviePageReviews = (props) => {
  const {comments} = props;

  if (!comments.length) {
    return <h2>Not reviews</h2>;
  }

  const commentsRender = (column) => {
    const n = (column === Column.RIGHT) ? 1 : 0;

    return comments.map((comment, index) => index % 2 === n && (
      <div className="review" key={comment.id}>
        <blockquote className="review__quote">
          <p className="review__text">{comment.body}</p>

          <footer className="review__details">
            <cite className="review__author">{comment.user.name}</cite>
            <time className="review__date" dateTime={comment.dateTime}>{comment.formattedDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{comment.ratingWithComma}</div>
      </div>
    ));
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsRender(Column.LEFT)}
      </div>
      <div className="movie-card__reviews-col">
        {commentsRender(Column.RIGHT)}
      </div>
    </div>
  );
};

MoviePageReviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })),
};

export default MoviePageReviews;

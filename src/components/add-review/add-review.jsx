import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectors} from '~/selectors/selectors';
import PageHeader from '~/components/page-header/page-header';
import {operations} from '~/operations/oparations';

const STARS_COUNT = 5;
const validateRule = {
  TEXT: {
    MIN: 50,
    MAX: 400,
  },
  RANKING: {
    MIN: 1,
    MAX: 5
  }
};
const comment = {
  rating: -1,
  text: ``
};

const AddReview = (props) => {
  const {film, isValid, onChangeIsValid, postComment} = props;

  const _handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;

    if (target.name === `rating`) {
      comment.rating = Number(value);
    }

    if (target.name === `review-text`) {
      comment.text = value;
    }

    const validateStatus = _commentValidate(comment);
    onChangeIsValid(validateStatus);
  };

  const _handlerFormSubmit = (evt) => {
    evt.preventDefault();

    postComment(film.id, comment);

    evt.target.reset();
  };

  const _commentValidate = (filmComment) => {
    const validateErrors = [];

    validateErrors.push(filmComment.text.length < validateRule.TEXT.MIN);
    validateErrors.push(filmComment.text.length > validateRule.TEXT.MAX);
    validateErrors.push(filmComment.rating < validateRule.RANKING.MIN);
    validateErrors.push(filmComment.rating > validateRule.RANKING.MAX);

    return !validateErrors.some((error) => error);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader breadcrumbs film={film}/>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={_handlerFormSubmit} onChange={_handleInputChange}>
          <div className="rating">
            <div className="rating__stars">
              {new Array(STARS_COUNT).fill(``).map((_, index) => (
                <Fragment key={`${index}_star`}>
                  <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index + 1} />
                  <label className="rating__label" htmlFor={`star-${index}`}>Rating ${index}</label>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" />
            <div className="add-review__submit">
              {isValid && <button className="add-review__btn" type="submit">Post</button>}
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
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
  onChangeIsValid: PropTypes.func,
  isValid: PropTypes.bool,
  postComment: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  const filmId = props.match.params.id;

  return {

    film: selectors.films.getFilmById(state, filmId),
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (filmId, {rating, text}) => dispatch(operations.comments.storeComment(filmId, rating, text)),
});

export {AddReview};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

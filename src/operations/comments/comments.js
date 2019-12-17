import Comment from '~/models/comment';
import {actions} from '~/actions/actions';

const _parseAndSort = (data) => {
  const comments = Comment.parseComments(data);
  comments.sort((a, b) => b.date - a.date);

  return comments;
};

export const loadComments = (filmId) => (dispatch, _, api) => {
  return api.get(`/comments/${filmId}`)
    .then(({data}) => {
      dispatch(actions.comments.loadComments(_parseAndSort(data)));
    });
};

export const storeComment = (filmId, rating, text) => (dispatch, _, api) => {
  const comment = {
    rating,
    comment: text
  };

  return api.post(`/comments/${filmId}`, comment)
    .then(({data}) => {
      dispatch(actions.comments.loadComments(_parseAndSort(data)));
    });
};

import Comment from '~/models/comment';
import {actions} from '~/actions/actions';

export const loadComments = (filmId) => (dispatch, _, api) => {
  return api.get(`/comments/${filmId}`)
    .then(({data}) => {
      const comments = Comment.parseComments(data);
      dispatch(actions.comments.loadComments(comments));
    });
};

export const storeComment = (filmId, rating, text) => (dispatch, _, api) => {
  const comment = {
    rating,
    comment: text
  };

  return api.post(`/comments/${filmId}`, comment)
    .then(({data}) => {
      dispatch(actions.comments.loadComments(data));
    });
};

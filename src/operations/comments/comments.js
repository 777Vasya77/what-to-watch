import Comment from '~/models/comment';
import {actions} from '~/actions/actions';

export const loadComments = (filmId) => (dispatch, _, api) => {
  return api.get(`/comments/${filmId}`)
    .then(({data}) => {
      const comments = Comment.parseComments(data);
      dispatch(actions.comments.loadComments(comments));
    });
};

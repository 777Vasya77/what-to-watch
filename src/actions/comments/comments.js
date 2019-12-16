import ActionType from '~/actions/comments/action-types';

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

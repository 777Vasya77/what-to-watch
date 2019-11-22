import ActionType from '~/actions/user/action-types';

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setAuth = (auth) => ({
  type: ActionType.SET_AUTH,
  payload: auth,
});

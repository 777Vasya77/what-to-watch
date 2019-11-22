import ActionType from '~/actions/user/action-types';

const initialState = {
  auth: null,
  isAuthorizationRequired: false
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
    case ActionType.SET_AUTH:
      return Object.assign({}, state, {
        auth: action.payload
      });

    default:
      return state;
  }
};

export default user;

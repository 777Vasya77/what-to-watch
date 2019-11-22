import ActionType from '~/actions/user/action-types';

const initialState = {
  isAuthorizationRequired: false
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });

    default:
      return state;
  }
};

export default user;

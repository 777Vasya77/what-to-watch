import ActionType from '~/actions/general/action-types';

const initialState = {
  isAppReady: false,
};

const general = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.SET_APP_IS_READY:
      return Object.assign({}, state, {
        isAppReady: action.payload,
      });

    default:
      return state;
  }
};

export default general;

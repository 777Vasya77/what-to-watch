import ActionType from '~/actions/user/action-types';

const initialState = {
  auth: null,
  isAuthorizationRequired: false,
  myFilmList: [],
  myFilmListLoading: false
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
    case ActionType.INIT_MY_LIST_FILM:
      return Object.assign({}, state, {
        myFilmList: action.payload
      });
    case ActionType.SET_MY_FILM_LIST_LOADING:
      return Object.assign({}, state, {
        myFilmListLoading: action.payload
      });
    case ActionType.ADD_FILM:
      return Object.assign({}, state, {
        myFilmList: state.myFilmList.concat(action.payload)
      });
    case ActionType.REMOVE_FILM:
      const index = state.myFilmList.findIndex((film) => +film.id === +action.payload.id);
      state.myFilmList.splice(index, 1);

      return Object.assign({}, state, {
        myFilmList: state.myFilmList
      });

    default:
      return state;
  }
};

export default user;

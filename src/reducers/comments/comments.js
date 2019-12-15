import ActionType from "~/actions/comments/action-types";

const initialState = {
  comments: []
};

const comments = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload
      });

    default:
      return state;
  }

};

export default comments;

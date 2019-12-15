import comments from "~/reducers/comments/comments";
import ActionType from "~/actions/comments/action-types";

describe(`Comments reducer work correctly`, () => {
  it(`reducer should correctly set loaded comments`, () => {
    expect(comments({
      comments: []
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: [{comment: 1}]
    })).toEqual({
      comments: [{comment: 1}]
    });
  });
});

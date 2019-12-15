import {actions} from '~/actions/actions';
import ActionType from '~/actions/comments/action-types';

describe(`General action creator work correctly`, () => {
  it(`Action creator setAppIsReady return correctly action`, () => {
    expect(actions.comments.loadComments([
      {comment: 1}
    ])).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: [{comment: 1}]
    });
  });
});

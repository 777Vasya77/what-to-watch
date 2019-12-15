import MockAdapter from 'axios-mock-adapter';
import createApi from '~/api/api';
import {operations} from '~/operations/oparations';
import ActionType from '~/actions/comments/action-types';
import Comment from '~/models/comment';

jest.mock(`~/models/comment`, () => ({
  parseComments: (data) => data
}));

describe(`Films operations tests`, () => {
  let api;
  let dispatch;
  let apiMock;
  let loadComments;

  beforeEach(() => {
    dispatch = jest.fn();
    api = createApi(dispatch);
    apiMock = new MockAdapter(api);
    loadComments = operations.comments.loadComments(1);
  });

  it(`Should make a correctly API call to /comments/{filmId}`, () => {
    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{comments: true}]);

    return loadComments(dispatch, null, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: Comment.parseComments([{comments: true}])
        });
      });
  });

});


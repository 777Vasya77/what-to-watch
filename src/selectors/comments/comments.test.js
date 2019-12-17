import {selectors} from '~/selectors/selectors';

describe(`Comments selectors work correctly`, () => {
  it(`commentsSelector work correctly`, () => {
    expect(selectors.comments.commentsSelector({
      comments: {
        comments: [{comment: 1}, {comment: 2}],
      }
    })).toEqual([{comment: 1}, {comment: 2}]);
  });
});


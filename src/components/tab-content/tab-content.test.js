import React from 'react';
import renderer from 'react-test-renderer';
import TabContent from '~/components/tab-content/tab-content';
import Film from '~/models/film';
import {COMMENTS, FILMS} from '~/moks/test-moks';
import Comment from '~/models/comment';

const film = new Film(FILMS[0]);
const comments = Comment.parseComments(COMMENTS);

describe(`TabContent component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <TabContent
              tab={`details`}
              film={film}
              comments={comments}
            />
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

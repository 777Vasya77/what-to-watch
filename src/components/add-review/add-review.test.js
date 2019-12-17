import React from 'react';
import renderer from 'react-test-renderer';
import {AddReview} from "~/components/add-review/add-review";
import Film from '~/models/film';
import {FILMS} from '~/moks/test-moks';

jest.mock(`~/components/page-header/page-header`, () => `page-header`);
const film = new Film(FILMS[0]);

describe(`AddReview component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <AddReview
              film={film}
              history={({push: () => {}})}
            />
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

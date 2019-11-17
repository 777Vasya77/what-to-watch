import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from "~/components/genres-list/genres-list";

describe(`GenresList component tests`, () => {
  const genres = [`1`, `2`];

  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <GenresList
              genres={genres}
              onGenreLinkClick={jest.fn()}
              activeGenreFilter={genres[0]}
            />
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import GenresList from "~/components/genres-list/genres-list";
import {shallow} from "enzyme";

describe(`GenresList component e2e tests`, () => {
  const genres = [`1`, `2`];
  let wrapper;
  let handleGenreLinkClick;

  beforeEach(() => {
    handleGenreLinkClick = jest.fn();
    wrapper = shallow(
        <GenresList
          genres={genres}
          onGenreLinkClick={handleGenreLinkClick}
          activeGenreFilter={genres[0]}
        />
    );

    const link = wrapper.find(`.catalog__genres-link`).first();
    link.simulate(`click`, {
      preventDefault: () => {},
      target: {text: genres[0]}
    });
  });

  it(`Check call count function`, () => {
    expect(handleGenreLinkClick).toBeCalledTimes(1);
  });

  it(`Check data in callback function`, () => {
    expect(handleGenreLinkClick).toHaveBeenCalledWith(genres[0]);
  });

  it(`Links count === passed genres array length`, () => {
    expect(wrapper.find(`.catalog__genres-link`)).toHaveLength(genres.length);
  });
});

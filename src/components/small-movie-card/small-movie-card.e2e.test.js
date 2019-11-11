import React from 'react';
import {shallow} from 'enzyme';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';

const film = new Film(FILMS[0]);

describe(`SmallMovieCard component tests`, () => {
  let wrapper;
  let mouseEnterHandler;
  let mouseLeaveHandler;

  beforeEach(() => {
    mouseEnterHandler = jest.fn();
    mouseLeaveHandler = jest.fn();

    wrapper = shallow(
        <SmallMovieCard
          film={film}
          onMovieCardMouseEnter={mouseEnterHandler}
          onMovieCardMouseLeave={mouseLeaveHandler}
          isPlaying={false}
        />
    );

    const card = wrapper.find(`article`);
    card.simulate(`mouseEnter`);
    card.simulate(`mouseLeave`);
  });

  it(`Component have one movie card`, () => {
    expect(wrapper.find(`article`)).toHaveLength(1);
  });

  it(`Check the onMovieCardMouseEnter callback`, () => {
    expect(mouseEnterHandler).toBeCalledTimes(1);
  });

  it(`Check the onMovieCardMouseLeave callback`, () => {
    expect(mouseLeaveHandler).toBeCalledTimes(1);
  });

  it(`Check data in callback function`, () => {
    expect(mouseEnterHandler).toBeCalledWith(film);
  });
});



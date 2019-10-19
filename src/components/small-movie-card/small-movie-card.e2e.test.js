import React from 'react';
import {shallow} from 'enzyme';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

const FILM = `film-1`;

it(`check the onClick callback`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(
      <SmallMovieCard
        film={FILM}
        onClick={clickHandler}
      />
  );

  const cardTitle = wrapper.find(`.small-movie-card__link`);
  cardTitle.simulate(`click`);

  expect(clickHandler).toBeCalledTimes(1);
});


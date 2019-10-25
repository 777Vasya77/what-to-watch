import React from 'react';
import {shallow} from 'enzyme';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

const FILM = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};


describe(`SmallMovieCard component tests`, () => {
  let wrapper;
  let mouseEnterHandler;
  beforeEach(() => {
    mouseEnterHandler = jest.fn();
    wrapper = shallow(
        <SmallMovieCard
          film={FILM}
          onCardLinkMouseEnter={mouseEnterHandler}
        />
    );

    const cardTitle = wrapper.find(`.small-movie-card__link`).first();
    cardTitle.simulate(`mouseEnter`);
  });

  it(`Check the onClick callback`, () => {
    expect(mouseEnterHandler).toBeCalledTimes(1);
  });

  it(`Check data in callback function`, () => {
    expect(mouseEnterHandler).toBeCalledWith(FILM);
  });
});



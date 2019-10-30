import React from 'react';
import VideoPlayer from '~/components/video-player/video-player';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';
import {mount} from 'enzyme';

const movie = new Film(FILMS[0]);

const createWrapper = (isPlaying) => {
  const {previewVideoLink, previewImage} = movie;
  return mount(
      <VideoPlayer
        src={previewVideoLink}
        isPlaying={isPlaying}
        previewImage={previewImage}
      />
  );
};

describe(`VideoPlayer component e2e tests`, () => {
  it(`State isPlaying a TRUE if video playing`, () => {
    expect(createWrapper(true).state().isPlaying).toBeTruthy();
  });

  it(`State isPlaying a FALSE if video paused`, () => {
    expect(createWrapper(false).state().isPlaying).toBeFalsy();
  });
});

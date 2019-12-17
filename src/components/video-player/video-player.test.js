import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from '~/components/video-player/video-player';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';

const movie = new Film(FILMS[0]);

describe(`VideoPlayer component tests`, () => {
  it(`Component render correctly`, () => {
    const {previewVideoLink, previewImage} = movie;
    const tree = renderer.create(
        <VideoPlayer
          src={previewVideoLink}
          isPlaying={false}
          previewImage={previewImage}
        />,
        {
          createNodeMock: () => ({
            load: () => ({})
          })
        }
    );

    expect(tree).toMatchSnapshot();
  });
});

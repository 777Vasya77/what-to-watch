import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app.jsx';
import {FILMS} from '~/moks/films';
import Film from '~/models/film';

const START_INDEX = 0;
const FILMS_LIMIT = 20;

const init = () => {
  const parsedFilmsList = Film.parseFilms(FILMS).slice(START_INDEX, FILMS_LIMIT);
  ReactDOM.render(
      <App filmsList={parsedFilmsList} />,
      document.querySelector(`#root`)
  );
};

init();

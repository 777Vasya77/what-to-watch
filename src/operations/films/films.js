import {actions} from '~/actions/actions';
import Film from '~/models/film';

export const loadFilms = () => (dispatch, _, api) => {
  dispatch(actions.films.setLoading(true));

  return api.get(`/films`)
    .then(({data}) => {
      const films = Film.parseFilms(data);
      dispatch(actions.films.loadFilms(films));
      dispatch(actions.films.setLoading(false));
    });
};

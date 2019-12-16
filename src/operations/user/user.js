import {actions} from '~/actions/actions';
import User from '~/models/user';
import history from '~/history';
import {Route} from '~/api/api';
import {selectors} from "~/selectors/selectors";
import Film from "~/models/film";

export const login = (userData) => (dispatch, _, api) => {
  return api.post(Route.LOGIN, userData)
    .then(({data}) => {
      if (!data) {
        return;
      }

      const user = User.parseUser(data);

      dispatch(actions.user.setAuth(user));
      dispatch(actions.user.requireAuthorization(false));

      history.push(Route.MOVIES);
    });
};

export const loadFavoriteFilms = () => (dispatch, getState, api) => {
  return api.get(`/favorite`)
    .then(({data}) => {
      const films = Film.parseFilms(data);
      dispatch(actions.user.initMyListFilms(films));
    });
};

export const toggleFavorite = (filmId, status) => (dispatch, getState, api) => {
  return api.post(`/favorite/${filmId}/${status}`)
    .then(() => {
      const film = selectors.films.getFilmById(getState(), filmId);
      if (status) {
        dispatch(actions.user.addFilmToMyList(film));
      } else {
        dispatch(actions.user.removeFilmToMyList(film));
      }
    });
};

import {operations} from '~/operations/oparations';
import {actions} from '~/actions/actions';

export const init = () => (dispatch) => {
  const loadPromoFilm = dispatch(operations.films.loadPromoFilm());
  const loadFilmsList = dispatch(operations.films.loadFilms());

  return Promise.all([loadPromoFilm, loadFilmsList])
    .then(() => {
      dispatch(operations.user.checkAuth())
        .then(() => {
          dispatch(actions.general.setAppIsReady(true));
        });
    });
};

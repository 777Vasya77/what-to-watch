import {operations} from '~/operations/oparations';
import {actions} from '~/actions/actions';

export const init = () => (dispatch) => {
  return dispatch(operations.films.loadFilms())
    .then(() => {
      dispatch(actions.general.setAppIsReady(true));
    });
};

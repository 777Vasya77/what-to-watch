import {actions} from '~/actions/actions';
import User from '~/models/user';
import history from '~/history';
import {Route} from '~/api/api';

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

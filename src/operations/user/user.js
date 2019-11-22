import {actions} from '~/actions/actions';
import User from '~/models/user';

export const login = (userData) => (dispatch, _, api) => {
  return api.post(`/login`, userData)
    .then(({data}) => {
      if (!data) {
        return;
      }

      const user = User.parseUser(data);

      dispatch(actions.user.setAuth(user));
      dispatch(actions.user.requireAuthorization(false));
    });
};

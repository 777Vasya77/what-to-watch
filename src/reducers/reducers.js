import {combineReducers} from 'redux';
import films from '~/reducers/films/films';
import user from '~/reducers/user/user';

export default combineReducers({
  films,
  user
});

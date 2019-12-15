import {combineReducers} from 'redux';
import general from '~/reducers/general/general';
import films from '~/reducers/films/films';
import user from '~/reducers/user/user';
import comments from '~/reducers/comments/comments';

export default combineReducers({
  general,
  films,
  user,
  comments,
});

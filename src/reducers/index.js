import {combineReducers} from 'redux';
import user from './userReducer';
import photos from './photoReducer';

export default combineReducers({
  user,
  photos,
});

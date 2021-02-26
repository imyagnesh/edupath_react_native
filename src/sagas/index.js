import {all, fork} from 'redux-saga/effects';
import userSaga from './userSaga';
import photosSaga from './photosSaga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(photosSaga)]);
}

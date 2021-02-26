import {takeLeading, call, put} from 'redux-saga/effects';
import {storeData} from '../utils';
import axios from '../utils/axios';

function* fetchUserRequest({payload, meta}) {
  try {
    const res = yield call(axios.post, 'auth/local', payload);
    yield call(storeData, 'token', res.data);
    yield call(meta.resetForm);
    yield put({type: 'FETCH_USER_SUCCESS', payload: res.data});
  } catch (error) {
    yield put({type: 'FETCH_USER_FAIL', payload: error});
  }
}

export default function* rootUser() {
  yield takeLeading('FETCH_USER_REQUEST', fetchUserRequest);
}

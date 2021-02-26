import axios from 'axios';
import {takeLatest, call, put, select} from 'redux-saga/effects';
import {FAIL, FETCH_PHOTO, REQUEST, SUCCESS} from '../constants/reducerTypes';

const getPagination = (store) => store.photos;

function* fetchPhotosRequest() {
  try {
    const {page, limit} = yield select(getPagination);
    console.log('page', page);
    const res = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
    );
    yield put({type: `${FETCH_PHOTO}_${SUCCESS}`, payload: res.data});
  } catch (error) {
    yield put({type: `${FETCH_PHOTO}_${FAIL}`, payload: error});
  }
}

export default function* rootPhoto() {
  yield takeLatest(`${FETCH_PHOTO}_${REQUEST}`, fetchPhotosRequest);
}

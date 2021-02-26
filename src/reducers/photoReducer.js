import {FAIL, FETCH_PHOTO, REQUEST, SUCCESS} from '../constants/reducerTypes';

const initialState = {
  loading: false,
  data: [],
  error: null,
  page: 0,
  limit: 10,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case `${FETCH_PHOTO}_${REQUEST}`:
      return {...state, loading: true};

    case `${FETCH_PHOTO}_${SUCCESS}`:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...payload],
        page: state.page + 1,
      };

    case `${FETCH_PHOTO}_${FAIL}`:
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};

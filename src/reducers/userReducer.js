const initialState = {
  loading: false,
  user: null,
  error: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'FETCH_USER_REQUEST':
      return {...state, loading: true};

    case 'FETCH_USER_SUCCESS':
      return {...state, loading: false, user: payload};

    case 'FETCH_USER_FAIL':
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};

import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import {
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_START
} from '../constants/actionTypes';
import apiCall from '../api';

function* searchMovie(action) {
  const { movieName } = action.payload;

  try {
    const result = yield call(apiCall, 'GET', '/', null, { s: movieName });

    if (result.data.Error) {
      throw new Error(result.data.Error);
    }

    yield put({
      type: SEARCH_MOVIE_COMPLETE,
      payload: result.data.Search
    });
  } catch (e) {
    yield put({
      type: SEARCH_MOVIE_ERROR,
      payload: e
    });
  }
}

export default function* () {
  yield takeLatest(SEARCH_MOVIE_START, searchMovie);
};

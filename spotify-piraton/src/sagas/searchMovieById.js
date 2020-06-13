import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import {
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_START
} from '../constants/actionTypes';
import apiCall from '../api';

function* searchMovieById(action) {
  const { movieId } = action.payload;

  try {
    const result = yield call(apiCall, 'GET', '/', null, { i: movieId });

    if (result.data.Error) {
      throw new Error(result.data.Error);
    }

    yield put({
      type: SEARCH_MOVIE_BY_ID_COMPLETE,
      payload: result.data
    });
  } catch (e) {
    yield put({
      type: SEARCH_MOVIE_BY_ID_ERROR,
      payload: e
    });
  }
}

export default function* () {
  yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieById);
};

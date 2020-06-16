import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './dashboardConstants';
import * as actions from './dashboardActions';
import * as services from './dashboardServices';

function* getRecentlyPlayed() {
  try {
    const response = yield services.getRecentlyPlayed();
    if (response)
      yield put(actions.getRecentlyPlayedSuccess({ played: response.items }));
  } catch (err) {
    yield put(actions.getRecentlyPlayedFailure({ error: err.message }));
  }
}

function* getRecentlyPlayedSaga() {
  yield takeLatest(constants.GET_RECENTLY_PLAYED_START, getRecentlyPlayed);
}

export default function* dashboardSaga() {
  yield all([
    fork(getRecentlyPlayedSaga)
  ]);
}

import * as constants from './dashboardConstants';

export const getRecentlyPlayedStart = () => ({
  type: constants.GET_RECENTLY_PLAYED_START
});

export const getRecentlyPlayedSuccess = payload => ({
  type: constants.GET_RECENTLY_PLAYED_SUCCESS,
  payload
});

export const getRecentlyPlayedFailure = payload => ({
  type: constants.GET_RECENTLY_PLAYED_FAILURE,
  payload
});

import * as constants from './dashboardConstants';

const initialState = {
  played: [],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_RECENTLY_PLAYED_START:
      return { ...state, loading: true, error: null };
    case constants.GET_RECENTLY_PLAYED_SUCCESS:
      return { ...state, loading: false, error: null, played: payload.played };
    case constants.GET_RECENTLY_PLAYED_FAILURE:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};
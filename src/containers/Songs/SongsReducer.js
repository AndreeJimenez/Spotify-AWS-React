import * as constants from './SongsConstants';
const initialState = {
  list: [], 
  tracks: {},
  loading: true,
  error: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_AWS_SONGS_START:
    case constants.POST_AWS_SONGS_START:
    case constants.DELETE_AWS_SONGS_START:
      return { ...state, loading: true, error: null };

    case constants.GET_AWS_SONGS_SUCCESS:
    case constants.POST_AWS_SONGS_SUCCESS:
    case constants.DELETE_AWS_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        tracks: payload.song,
      };

    case constants.CLEAN_SONG:
      return { ...state, tracks: {}, loading: true };

    case constants.POST_AWS_SONGS_FAILURE:
    case constants.GET_AWS__SONGS_FAILURE:
    case constants.DELETE_AWS_SONGS_FAILURE:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;    
  }
};
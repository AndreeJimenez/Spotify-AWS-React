import * as constants from './FoldersConstants';

const initialState = {
  list: [],
  folder: [],
  tracks: [],
  randomTracks: [],
  likedSongs: [],
  following: false,
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_AWS_FOLDERS_START:
      return { ...state, loading: true, error: null };

    case constants.GET_AWS_FOLDERS_SUCCESS:
      return { ...state, loading: false, error: null, list: payload.folders };

    case constants.CLEAN_FOLDERS:
      return { ...state, playlist: {}, loading: true };

    case constants.GET_AWS_FOLDERS_FAILURE:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};
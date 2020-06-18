import * as constants from './FoldersConstants';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_AWS_FOLDERS_START:
      return { ...state, loading: true };

    case constants.GET_AWS_FOLDERS_SUCCESS:
      return { ...state, loading: false, list: payload.response };

    case constants.CLEAN_FOLDER:
      return { ...state };

    case constants.GET_AWS_FOLDERS_FAILURE:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};


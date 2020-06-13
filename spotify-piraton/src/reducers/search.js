import {
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_RESET,
  SEARCH_MOVIE_START
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  results: null,
  error: null
};

export default function (state = initialState, action) {
  switch(action.type) {
    case SEARCH_MOVIE_START:
      return {
        ...state,
        loading: true
      };
    case SEARCH_MOVIE_COMPLETE:
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    case SEARCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SEARCH_MOVIE_RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
}

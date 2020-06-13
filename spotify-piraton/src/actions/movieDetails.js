import {
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_BY_ID_RESET
} from '../constants/actionTypes';

export const resetSearchMovieById = () => ({
  type: SEARCH_MOVIE_BY_ID_RESET
});

export const searchMovieById = movieId => ({
  type: SEARCH_MOVIE_BY_ID_START,
  payload: { movieId }
});

import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_RESET
} from '../constants/actionTypes';

export const resetMovieSearch = () => ({
  type: SEARCH_MOVIE_RESET
});

export const searchMovie = movieName => ({
  type: SEARCH_MOVIE_START,
  payload: { movieName }
});

import { all } from 'redux-saga/effects';
import searchMovie from './searchMovie';
import searchMovieById from './searchMovieById';

export default function* () {
  yield all([
    searchMovie(),
    searchMovieById()
  ]);
}

import { combineReducers } from 'redux';
import search from './search';
import movie from './movie';

const rootReducer = combineReducers({
  search,
  movie
});

export default rootReducer;

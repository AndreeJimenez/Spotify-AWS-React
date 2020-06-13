import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/root';
import rootSaga from './sagas/root';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const storeEnhancers = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
  );

  return {
    ...createStore(rootReducer, storeEnhancers),
    runSaga: sagaMiddleware.run(rootSaga)
  }
};

export default configureStore;

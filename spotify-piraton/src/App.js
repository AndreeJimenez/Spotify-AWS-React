import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import MoviePage from './pages/Movie';
import SearchPage from './pages/Search';
import './App.css';

function App(props) {
  const { store } = props;
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movie" component={MoviePage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

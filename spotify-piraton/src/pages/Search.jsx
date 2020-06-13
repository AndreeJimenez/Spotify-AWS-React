import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'query-string';
import _ from 'lodash';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import MovieDetails from '../components/MovieDetails';
import { searchMovie } from '../actions/search';

export default function SearchPage(props) {
  const dispatch = useDispatch();

  const loading = useSelector(state => _.get(state, 'search.loading'));
  const results = useSelector(state => _.get(state, 'search.results'));
  const error = useSelector(state => _.get(state, 'search.error'));

  useEffect(() => {
    const { movieName } = qs.parse(props.location.search);

    if (
      movieName &&
      (!loading && !results) &&
      !error
    ) {
      dispatch(searchMovie(movieName));
    }
  });

  const renderMovies = () => {
    if (results && results.length >= 1) {
      return results.map((movie, index) => (
        <MovieDetails key={index} {...movie} />
      ));
    } else if (loading) {
      return <CircularProgress size={100} color="primary" />;
    } else if (error) {
      return <Alert severity="error">Oops, something terrible has happened! :(</Alert>;
    }
    return <div></div>;
  };

  return (
    <Container>
      {renderMovies()}
    </Container>
  );
}

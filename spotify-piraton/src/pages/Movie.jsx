import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import qs from 'query-string'
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { searchMovieById } from '../actions/movieDetails';

export default function MoviePage(props) {
  const dispatch = useDispatch();

  const result = useSelector(state => _.get(state, 'movie.result'));
  const loading = useSelector(state => _.get(state, 'movie.loading'));
  const error = useSelector(state => _.get(state, 'movie.error'));

  useEffect(() => {
    const { movieId } = qs.parse(props.location.search);

    if (
      movieId &&
      (!loading && !result) &&
      !error
    ) {
      const action = searchMovieById(movieId);
      dispatch(action);
    }
  });

  const renderMovieDetails = () => {
    if (result) {
      return (
        <div>
          <Typography variant="h3">{result.Title}</Typography>
          <img src={result.Poster} alt={result.title} />
          <Typography>
            <b>Actores:</b> {result.Actors}
          </Typography>
          <Typography>
            <b>Director:</b> {result.Director}
          </Typography>
          <Typography>
            <b>Pais:</b> {result.Country}
          </Typography>
          <Typography>
            <b>Clasificacion:</b> {result.Rated}
          </Typography>
          <Typography>
            <b>Premios:</b> {result.Awards}
          </Typography>
          <Typography>
            <b>Sinposis:</b> {result.Plot}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.history.goBack()}
          >
            Regresar a búsqueda
          </Button>
        </div>
      );
    } else if(loading) {
      return <CircularProgress size={100} color="primary" />;
    } else if (error) {
      return <Alert severity="error">Oops, something terrible has happened :(</Alert>;
    }
    return <div/>;
  };

  return (
    <Container>
      {renderMovieDetails()}
    </Container>
  );
}

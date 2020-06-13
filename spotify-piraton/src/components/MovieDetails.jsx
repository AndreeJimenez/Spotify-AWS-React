import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { resetSearchMovieById } from '../actions/movieDetails';

const useStyles = makeStyles({
  cardContainer: {
    marginBottom: 8
  },
  poster: {
    width: 120
  },
  movieInfo: {
    paddingLeft: 8
  }
});

function MovieDetails(props) {
  const {
    Title: title,
    Year: year,
    Type: type,
    imdbID: imdbId,
    Poster: poster,
    history
  } = props;

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSeeMovie = () => {
    dispatch(resetSearchMovieById());
    history.push(`/movie?movieId=${imdbId}`);
  };

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img
            className={classes.poster}
            src={poster}
            alt={title}
          />
        </Grid>
        <Grid item className={classes.movieInfo}>
          <Typography>{title}</Typography>
          <Typography>{year}</Typography>
          <Typography>{type}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSeeMovie}
          >
            Ver más
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withRouter(MovieDetails);

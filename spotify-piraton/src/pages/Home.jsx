import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MovieIcon from '@material-ui/icons/Movie';
import { resetMovieSearch } from '../actions/search';

const centeredObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    flexDirection: 'column',
    ...centeredObject
  },
  cardContainer: {
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: '4rem',
    ...centeredObject
  },
  title: {
    fontSize: '4rem'
  },
  titleGridContainer: {
    ...centeredObject
  },
  textFieldSearch: {
    width: '90%'
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  buttonsContainer: {
    marginTop: '.5rem'
  },
  movieIcon: {
    fontSize: '4rem'
  }
}));

export default function HomePage(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    dispatch(resetMovieSearch());
    props.history.push(`/search?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>¡Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          className={classes.textFieldSearch}
          value={searchText}
          placeholder="Buscar película"
          onChange={e => setSearchText(e.target.value)}
        />
        <Grid className={classes.buttonsContainer}>
          <Button
            variant="contained"
            onClick={() => setSearchText('')}
          >
            Limpiar
          </Button>
          <Button
            className={classes.searchButton}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
}

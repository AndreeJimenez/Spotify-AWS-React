import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 'auto',
    maxWidth: 800,
    height: 450,
    marginTop: 200,
    backgroundColor: '#1ea607',
  },
  image: {
    width: 128,
    height: 128,
  },
  text: {
    color: '#FFFFFF',
    fontSize: '15px',
    align: 'center'
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: '25px',
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>          
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              className={classes.container}
              item
              xs
              container
              direction='column'
              spacing={2}
            >
              <Grid item xs>
                <Typography
                  gutterBottom
                  className={classes.textTitle}
                  variant='h4'
                >
                  Developed by:
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Andree Jiménez Bernal
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Jorge Hernan Reyes Salazar
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Martín Jasso Flores
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Manuel Alejandro García Castro
                </Typography> 
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Carlos Javier González Moreno
                </Typography> 
                
                <Divider className={classes.divider} />
                <div>
                </div>    
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
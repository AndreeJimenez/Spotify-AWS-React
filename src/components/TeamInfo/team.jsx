import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {    
    width: '100%',
    height: '100%',
    align: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',    
  },
  inline: {
    display: 'inline',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Typography variant='h6' align='center'>
        Integrantes del Equipo uwu (DREAM TEAM)
      </Typography>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar className={classes.purple}>A</Avatar>
        </ListItemAvatar>
        <ListItemText 
          primary="Andree Jiménez Bernal"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Matrícula
              </Typography>
              {" — 68589"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar className={classes.purple}>J</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Jorge Hernán Reyes Salazar"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Matrícula
              </Typography>
              {" — 69040"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar className={classes.purple}>MJ</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Martín Jasso Flores"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Matrícula
              </Typography>
              {' — 68168'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar className={classes.purple}>C</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Carlos Javier González Moreno"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Matrícula
              </Typography>
              {' — 69329'}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar className={classes.purple}>M</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Manuel Alejandro García Castro"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Matrícula
              </Typography>
              {' — 68661'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem> 
        <img width="95px" height="90px" src="https://media1.giphy.com/media/jXOxSiAx5UVnq/giphy.gif" alt="Modo Diablo"/>
      </ListItem>
    </List>
  );
}

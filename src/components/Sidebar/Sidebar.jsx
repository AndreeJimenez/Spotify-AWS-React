import React from 'react'; 
import { Link } from 'react-router-dom';
import Playlists from '../../containers/Playlists/Playlists';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  SectionTitle
} from '../../components/LibraryItem/playlistItemStyles';
import {
  SideContainer,
  SpotifyLogo,
  LibraryContainer,
  LibraryItem,
  ScrollContainer,
  PlaylistContainer,
} from './sidebarStyles';
const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
    fontFamily: 'Roboto',
  }
}));
const theme = createMuiTheme({
  typography: { 
    button: {
      fontStyle: 'italic',
    },
  },
});
const Sidebar = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
      setChecked((prev) => !prev);
  };
  return (
    <SideContainer>
      <Link to='/app'>
       <SpotifyLogo src={"https://i.imgur.com/NH1gSsj.png"} alt='Spotify logo' />
      </Link> 
      <img className="doge" width="50px" height="50px" src="https://media.tenor.com/images/f2d58327e91570e5205752c907d53bdc/tenor.gif"/>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} onChange={toggleChecked} />}
          label="MODO DIABLO" 
          color="#de0050"
          size="medium"
          className={classes.button}
        />
      </FormGroup>
      <LibraryContainer>
        <ThemeProvider theme={theme}>
          <Button
              variant="contained"
              component={NavLink}
              to='/app/team/'
              color='secondary'
              className={classes.button}>          
            <Typography variant="h5">Credits u.u</Typography>         
            </Button>
  <SectionTitle>Your Playlists</SectionTitle>
        <LibraryItem gradient>
        </LibraryItem>
        </ThemeProvider>
      </LibraryContainer>    
      <PlaylistContainer>
        <ScrollContainer>
          <Playlists />
        </ScrollContainer>
      </PlaylistContainer>
      
    </SideContainer>
  );
    
};
export default Sidebar;
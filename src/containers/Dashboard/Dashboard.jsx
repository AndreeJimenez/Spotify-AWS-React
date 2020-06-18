import React, { useEffect } from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
//icon
//import carpetaicon from '../../assets/images/carpeta.png';
// redux
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserStart } from '../Auth/authActions';
import { getUserPlaylistsStart } from '../Playlists/playlistsActions';
import { getRecentlyPlayedStart,} from './dashboardActions';
import {  getAWSFoldersStart  } from '../Folders/FoldersActions';
import {
  LibraryItemsContainer,
  SectionTitleContainer,
  SectionTitle
} from '../../components/LibraryItem/playlistItemStyles';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';
import useNotifier from '../../hooks/useNotifier';
const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
    fontFamily: 'Roboto',
  }
}));
const styles = {
  floatingLabelFocusStyle: {
      color: "#fff"
  }
}
const Dashboard = () => {
const dispatch = useDispatch();
const classes = useStyles();
const { showSnackbar } = useNotifier({
  message: 'Algo salió mal plebe :('
});
useTitle('Spotify AWS');
  const {
    played,
    loading,
    error
  } = useSelector(({ dashboard }) => dashboard),
    authLoading = useSelector(({ auth }) => auth.loading),
    playlistLoading = useSelector(({ playlists }) => playlists.loading);
  useEffect(() => {
    dispatch(getUserStart());
    dispatch(getUserPlaylistsStart());
    dispatch(getRecentlyPlayedStart());
    dispatch(getAWSFoldersStart());
  }, [dispatch]);

  if (loading || authLoading || playlistLoading)
    return <Loader isLoading={loading || authLoading || playlistLoading} />;
  if (!loading && error) showSnackbar();
  return (
    <>
      <SectionTitleContainer>
        <SectionTitle>Recently Played</SectionTitle>
      </SectionTitleContainer>
      <LibraryItemsContainer>
        {played.map(({ track }, i) => (
          <LibraryItem
            key={i}
            id={track.album.id}
            title={track.name}
            subtitle={track.artists[0].name}
            cover={track.album.images[0].url}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
      <SectionTitleContainer>
        <SectionTitle>Playlist Folders</SectionTitle>
      </SectionTitleContainer>
      <LibraryItemsContainer>
        {played.map(({ track }, i) => (
          <LibraryItem
            key={i}
            id={track.album.id}
            title={"NOMBRE"}
            cover={"https://i.imgur.com/RNK19gQ.png"}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
      {/* ****************** */}
      <form className={classes.root} noValidate autoComplete="off">
        <div>       
        <TextField
          m="2rem"
          label="Add the name of your folder"
          id="test"
          InputLabelProps={{
          className: classes.floatingLabelFocusStyle,
          }}
        />       
          <Button
            variant="contained"
            component={"NavLink"}              
            color='secondary'>         
            <img width="45px" height="45px" src="https://i.imgur.com/NGC5pFm.png"/>         
          </Button>
        </div>
      </form>
      {/* ********https://i.imgur.com/NGC5pFm.png********** */}
      <SectionTitleContainer>
        <SectionTitle>Favorite Songs</SectionTitle>
      </SectionTitleContainer>
      <LibraryItemsContainer>
        {played.map(({ track }, i) => (
          <LibraryItem
            key={i}
            id={track.album.id}
            title={track.name}
            subtitle={track.artists[0].name}
            cover={track.album.images[0].url}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
    </>
  );
};
export default Dashboard;
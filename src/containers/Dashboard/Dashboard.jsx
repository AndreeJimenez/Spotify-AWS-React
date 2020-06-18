import React, { useEffect, useState } from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
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
import Folder from "../Folders/Folder";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
    fontFamily: 'Roboto',
  }
}));
const Dashboard = () => {
const dispatch = useDispatch();
const [input, setInput] = useState('');
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
  playlistLoading = useSelector(({ playlists }) => playlists.loading),
  foldersLoading = useSelector(({ response }) => response.loading);
  //foldersLoading = useSelector(({ folder }) => folder.list);
useEffect(() => {
  dispatch(getUserStart());
  dispatch(getUserPlaylistsStart());
  dispatch(getRecentlyPlayedStart());
  dispatch(getAWSFoldersStart());

}, [dispatch]);

if (loading || authLoading || playlistLoading || foldersLoading )
  return <Loader isLoading={loading || authLoading || playlistLoading || foldersLoading } />;
if (!loading && error) showSnackbar();

console.log(input);

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
      {played.map(({ folder }, i) => (
        <LibraryItem
          key={i}
          id={folder.idUser}
          title={folder.name}
          cover={"https://i.imgur.com/RNK19gQ.png"}
          type='folder'
        />
      ))}
    </LibraryItemsContainer>
    
    <form className={classes.root} noValidate autoComplete="off" alignItems='center'>
      <div>        
        <input  height="20px" value={input} onInput={e => setInput(e.target.value)}/>     
        <Button
          id="create"
          variant="contained"
          component={"NavLink"}           
          color='secondary'>         
          <img width="20px" height="20px" src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png" alt="add"/>         
        </Button>
      </div>
    </form>
    {/* ****************** */}
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
}
export default Dashboard;

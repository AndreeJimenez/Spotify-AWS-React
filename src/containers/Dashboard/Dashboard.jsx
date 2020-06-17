import React, { useEffect } from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
//icon
//import carpetaicon from '../../assets/images/carpeta.png';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserStart } from '../Auth/authActions';
import { getUserPlaylistsStart } from '../Playlists/playlistsActions';
import {
  getRecentlyPlayedStart,
} from './dashboardActions';
import {
  LibraryItemsContainer,
  SectionTitleContainer,
  SectionTitle
} from '../../components/LibraryItem/playlistItemStyles';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';
import useNotifier from '../../hooks/useNotifier';

const Dashboard = () => {
  const dispatch = useDispatch();

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
  }, [dispatch]);

  if (loading || authLoading || playlistLoading)
    return <Loader isLoading={loading || authLoading || playlistLoading} />;

  if (!loading && error) showSnackbar();

  return (
    <>
      <SectionTitleContainer>
        <SectionTitle>RECENTLY PLAYED</SectionTitle>
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
        <SectionTitle>PLAYLIST FOLDERS</SectionTitle>
      </SectionTitleContainer>
      <LibraryItemsContainer>
        {played.map(({ track }, i) => (
          <LibraryItem
            id={track.album.id}
            title={"NOMBRE"}
            cover={"https://lh3.googleusercontent.com/proxy/tVIYUIFjjoarjygTPZzaGyLlLb8sf4HwOxTfRR_E-AYIMkYW0m78tDL6NXewRr0O5t24_KSBcEEU8p48kjey2w2P3i1ST29AVqUHyx4qvwSEn5e8lRI"}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
      <SectionTitleContainer>
        <SectionTitle>FAVORITE SONGS</SectionTitle>
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
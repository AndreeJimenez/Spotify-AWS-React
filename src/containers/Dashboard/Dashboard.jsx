import React, { useEffect } from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserStart } from '../Auth/authActions';
import { getUserPlaylistsStart } from '../Playlists/playlistsActions';
import {
  getRecentlyPlayedStart,
  getRecommendationsStart,
  getNewReleasesStart,
  getFeaturedPlaylistsStart
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
    message: 'Oooops something went wrong.'
  });

  useTitle('Spotify AWS');

  const {
      played,
      recommendations,
      featured,
      releases,
      loading,
      error
    } = useSelector(({ dashboard }) => dashboard),
    authLoading = useSelector(({ auth }) => auth.loading),
    playlistLoading = useSelector(({ playlists }) => playlists.loading);

  useEffect(() => {
    dispatch(getUserStart());
    dispatch(getUserPlaylistsStart());
    dispatch(getRecentlyPlayedStart());
    dispatch(getRecommendationsStart());
    dispatch(getNewReleasesStart());
    dispatch(getFeaturedPlaylistsStart());
  }, [dispatch]);

  if (loading || authLoading || playlistLoading)
    return <Loader isLoading={loading || authLoading || playlistLoading} />;

  if (!loading && error) showSnackbar();

  return (
    <>
      <SectionTitleContainer>
        <SectionTitle>Recently played</SectionTitle>
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
            title={track.name}
            subtitle={track.artists[0].name}
            cover={track.album.images[0].url}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
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
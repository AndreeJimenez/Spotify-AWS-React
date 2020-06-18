import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  PlaylistTitle,
  PlaylistOwner,
  PlaylistPlay,
  PlaylistDelete,
  PlaylistTotalSongs,
  PlaylistIconsWrapper,
  PlaylistImage,
  PlaylistLeftWrapper,
  PlaylistRightWrapper,
  PlaylistImageContainer,
  PlaylistHeader,
  PlaylistHeaderSubcontainer,
  PlaylistButtonsContainer,
  PlaylistDescriptionContainer,
  IconContainer,
  PlaylistDescription,
} from './PlaylistComponentStyles';
import TrackItem from '../../components/TrackItem/TrackItem';
import { ReactComponent as DefaultSong } from '../../assets/icons/defaultSong.svg';
import EmptyPlaylist from './EmptyPlaylist';
import { useSelector } from 'react-redux';

const PlaylistContent = ({
  playlist,
  isLikedSongs,
  following,
  handleFollow,
  startPlaylist,
  isPlaying,
  userId,
  inLibrary,
}) => {

  const { likedSongs } = useSelector(({ playlists }) => playlists);
  const useStyles = makeStyles(() => ({
    button: {
      textTransform: 'none',
      fontFamily: 'Roboto',
    }
  }));
  const classes = useStyles();
  const history = useHistory();
  const playlistData = isLikedSongs
    ? {
        ...playlist,
        ...{
          name: 'Liked Songs',
          images: [
            {
              url:
                'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
            },
          ],
        },
      }
    : { ...playlist };

  const isMyPlaylist = playlistData?.owner?.id === userId;

  return (
    <>
      <PlaylistLeftWrapper>
        <PlaylistHeader>
          <PlaylistHeaderSubcontainer>
            <PlaylistImageContainer>
              {playlistData.images &&
                (playlistData?.images[0]?.url ? (
                  <PlaylistImage
                    src={
                      playlistData?.images ? playlistData?.images[0]?.url : ''
                    }
                    alt=''
                  />
                ) : (
                  <DefaultSong width={100} height={100} />
                ))}
            </PlaylistImageContainer>
            <PlaylistTitle>{playlistData?.name}</PlaylistTitle>
            {!isLikedSongs ? (
              <PlaylistOwner
                onClick={() =>
                  history.push(
                    `/app/user/${playlistData?.owner.display_name}`,
                    {
                      id: playlistData?.owner.id,
                    }
                  )
                }
              >
                {playlistData?.owner?.display_name}
              </PlaylistOwner>
            ) : null}
          </PlaylistHeaderSubcontainer>

          <PlaylistButtonsContainer>
            <PlaylistPlay
              onClick={startPlaylist}
              disabled={!playlistData?.tracks?.total}
            >
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </PlaylistPlay>
            <PlaylistDelete
              disabled={!playlistData?.tracks?.total} >
              Delete u.u
            </PlaylistDelete>
          </PlaylistButtonsContainer>
                    <PlaylistDescriptionContainer>
            {!isLikedSongs ? (
              <PlaylistDescription>
                {playlistData?.description}
              </PlaylistDescription>
            ) : null}
            <PlaylistTotalSongs>
              {playlistData?.tracks?.total ? playlistData?.tracks?.total : 0}{' '}
              ROLITAS
            </PlaylistTotalSongs>
          </PlaylistDescriptionContainer>
        </PlaylistHeader>
      </PlaylistLeftWrapper>
      <PlaylistRightWrapper>
        {playlistData?.tracks?.items?.length ? (
          playlistData?.tracks?.items?.map((track, i) => (
            <TrackItem
              key={i}
              added_at={track?.added_at}
              isInPlaylist={isMyPlaylist}
              song={{
                ...track?.track,
                cover: playlistData.images
                  ? playlistData.images[0].url
                  : 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
              }}
              liked={likedSongs.includes(track?.track?.id)}
              isLikedSongs={isLikedSongs}
              playlistId={playlistData.id}
            />
          ))
        ) : (
          <EmptyPlaylist playlistId={playlistData.id} />
        )}
      </PlaylistRightWrapper>
    </>
  );
};

export default React.memo(PlaylistContent);

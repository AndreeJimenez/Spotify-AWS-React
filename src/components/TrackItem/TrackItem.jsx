import React from 'react';
import {
  ItemContainer,
  MusicIconContainer,
  TextContainer,
  Name,
  SubTextsContainer,
  Artist,
  Album,
  DurationContainer,
  Duration,
  Separator,
  ArtistContainer,
  ArtistSeparator,
  ArtistsContainer,
  AlbumContainer,
  OptionButtonContainer,
  ImageContainer,
  Image,
  ButtonContainer,
} from './trackItemStyles';

import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg';
import { ReactComponent as MusicIcon } from '../../assets/icons/music.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSong, pauseSong } from '../../containers/Track/trackActions';
import { UpgradeButton, UpgradeText } from '../Navbar/navbarStyles';

const TrackItem = ({
  song,
  hasImage,
  hasSubtext = true,
  hasAlbum = true,
  hasDuration = true,
  hasOptions = true,
  btn,
  align,
  hasPadding,
  isInPlaylist,
  liked,
  isLikedSongs = false,
  playlistId,
}) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    artists,
    album,
    duration_ms,
    cover,
    preview_url,
  } = song;

  const {
    isPlaying,
    song: { id: songId },
  } = useSelector(({ track }) => track);

  const isCurrentlyPlaying = songId === id;

  const handlePlay = () => {
    if (preview_url) {
      dispatch(
        startSong({
          song,
          cover,
        })
      );
    }
  };
  return (
    <>
      <ItemContainer
        align={align}
        hasPadding={hasPadding}
        isDisabled={!preview_url}
      >
        <MusicIconContainer>
          {isPlaying && songId === id ? (
            <PauseIcon
              height='16'
              width='16'
              fill={isCurrentlyPlaying ? '#1ed760' : 'rgba(255, 255, 255, 1)'}
              onClick={() => dispatch(pauseSong())}
            />
          ) : (
            <PlayIcon
              height='20'
              width='20'
              fill={isCurrentlyPlaying ? '#1ed760' : 'rgba(255, 255, 255, 1)'}
              onClick={handlePlay}
            />
          )}

          <MusicIcon
            height='20'
            width='18'
            fill={isCurrentlyPlaying ? '#1ed760' : 'rgba(255, 255, 255, .6)'}
          />
        </MusicIconContainer>

        {hasImage ? (
          <ImageContainer>
            <Image src={cover || album?.images[0].url} />
          </ImageContainer>
        ) : null}

        <TextContainer>
          <Name current={isCurrentlyPlaying}>{name}</Name>
          {hasSubtext ? (
            <SubTextsContainer>
              <ArtistsContainer>
                {artists?.map((artist, i) => (
                  <ArtistContainer key={i}>
                    <Artist>
                      {artist.name}
                    </Artist>
                    {i + 1 !== artists.length ? (
                      <ArtistSeparator>,</ArtistSeparator>
                    ) : null}
                  </ArtistContainer>
                ))}
              </ArtistsContainer>

              {album && hasAlbum && (
                <>
                  <Separator>•</Separator>
                  <AlbumContainer>
                    <Album>{album.name}</Album>
                  </AlbumContainer>
                </>
              )}
            </SubTextsContainer>
          ) : null}
        </TextContainer>

        {btn && (
          <ButtonContainer>
            <UpgradeButton onClick={btn.onClick}>
              <UpgradeText>{btn.title}</UpgradeText>
            </UpgradeButton>
          </ButtonContainer>
        )}

        {hasOptions && (
          <OptionButtonContainer
          >
            <MoreIcon
              height='18'
              width='18'
              fill='rgba(255, 255, 255, 1)'
              data-type='more'
            />
          </OptionButtonContainer>
        )}
        {hasDuration && (
          <DurationContainer>
            <Duration>
              {`${moment.duration(duration_ms)._data.minutes}:${
                moment.duration(duration_ms)._data.seconds > 9
                  ? moment.duration(duration_ms)._data.seconds
                  : `0${moment.duration(duration_ms)._data.seconds}`
              }`}
            </Duration>
          </DurationContainer>
        )}
      </ItemContainer>
    </>
  );
};

export default React.memo(TrackItem);

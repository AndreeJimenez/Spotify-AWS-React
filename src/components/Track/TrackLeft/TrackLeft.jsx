import React from 'react';
import {
  PlayerLeft,
  SongImage,
  SongTextContainer,
  SongName,
  SongNameText,
  SongArtist,
} from './trackLeftStyles';

const TrackLeft = ({ song, handleChangeRoute }) => {
  return (
    <PlayerLeft>
      <SongImage
        src={song.cover}
        alt={song.cover}
        hasAlbum={song?.album?.id}
      />

      <SongTextContainer>
        {song?.album?.id ? (
          <SongName>{song?.name}</SongName>
        ) : (
          <SongNameText>{song?.name}</SongNameText>
        )}
        <SongArtist>
          {song?.artists && song?.artists[0].name}
        </SongArtist>
      </SongTextContainer>
    </PlayerLeft>
  );
};

export default TrackLeft;

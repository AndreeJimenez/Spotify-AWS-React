
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
//import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import {
  LibraryPlaylistContainer,
  LibraryPlaylistCoverContainer,
  LibraryPlaylistCover,
  LibraryPlaylistTitle,
  LibraryPlaylistAuthor,
  //LibraryPlaylistPlay,
  DefaultCover,
  LibraryPlaylistTag
} from './playlistItemStyles';

const LibraryItem = ({
  id,
  title,
  subtitle,
  cover,
  isLikedSongs,
  isPlayable = true,
  type = 'playlist',
  cardType,
  tag
}) => {
  const history = useHistory();

  return (
    <LibraryPlaylistContainer /*Esto es para que la imagen se pueda clikear isClickable={!!id}*/>
      {cover ? (       
          <LibraryPlaylistCoverContainer cardType={cardType} type={type}>
          <LibraryPlaylistCover src={cover} alt={title} type={type} />
        </LibraryPlaylistCoverContainer>
        
      ) : ( 
        <LibraryPlaylistCoverContainer>
          <DefaultCover />
        </LibraryPlaylistCoverContainer>
      )}
      <LibraryPlaylistTitle cardType={cardType}>{title}</LibraryPlaylistTitle>
      {subtitle && (
        <LibraryPlaylistAuthor
          onClick={() =>
            history.push(`/app/user/${subtitle.toLowerCase()}`, { id })
          }
        >
          {subtitle}
        </LibraryPlaylistAuthor>
      )}

      {tag ? <LibraryPlaylistTag>{tag}</LibraryPlaylistTag> : null}
{/* esto es para quitar el boton verde de repro
     {isPlayable && (
        <LibraryPlaylistPlay data-value='play' cardType={cardType}>
          <PlayIcon fill='#fff' width={cardType === 'topResult' ? 24 : 16} />
        </LibraryPlaylistPlay>
     )}*/}
    </LibraryPlaylistContainer>
  );
};
  
LibraryItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cover: PropTypes.string,
  isPlayable: PropTypes.bool
};

export default React.memo(LibraryItem);
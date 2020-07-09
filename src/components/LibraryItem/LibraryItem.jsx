
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
  type = 'playlist',
  cardType,
  tag,
  list
}) => {
  const history = useHistory();

  return (
    <LibraryPlaylistContainer >/*Esto es para que la imagen se pueda clikear isClickable={!!id}*/>
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
</LibraryPlaylistContainer>
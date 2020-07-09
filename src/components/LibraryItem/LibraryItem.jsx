
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  LibraryPlaylistContainer,
  LibraryPlaylistCoverContainer,
  LibraryPlaylistCover,
  LibraryPlaylistTitle,
  LibraryPlaylistAuthor,
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
    <LibraryPlaylistContainer>
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
  );
}

export default LibraryItem;
import React from 'react';
import PropTypes from 'prop-types';
import { Item, PlaylistItemText } from '../Sidebar/sidebarStyles';
const PlaylistsItem = ({ id, name, userId, owner }) => {
  const handleOnClickMore = e => {
    e.preventDefault();
  };

  return (
    <>
      <Item hasIcon={false}>
        <PlaylistItemText
          hasicon={0}
          to={`/app/playlist/${id}`}
          light={1}
          onContextMenu={handleOnClickMore}
        >
          {name}
        </PlaylistItemText>
      </Item>
    </>
  );
};

PlaylistsItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.memo(PlaylistsItem);

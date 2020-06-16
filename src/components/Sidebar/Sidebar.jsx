import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Playlists from '../../containers/Playlists/Playlists';
import spotify from '../../assets/images/spotify.png';

// estilos
import {
  SideContainer,
  SpotifyLogo,
  NavItemsContainer,
  Item,
  ItemText,
  ItemLink,
  LibraryContainer,
  IconSquare,
  SectionTitle,
  LibraryItem,
  ScrollContainer,
  PlaylistContainer,
  /*InstallItem*/
} from './sidebarStyles';
import { useLocation } from 'react-router-dom';
/*import { ModalsContext } from '../ModalsContext/ModalsContextContainer';*/

const Sidebar = () => {
  const { pathname } = useLocation();

  const isLibraryActive = [
    '/app/collection/playlists',
    '/app/collection/albums',
    '/app/collection/artists',
  ].includes(pathname);

  return (
    <SideContainer>
      <Link to='/app'>
        <SpotifyLogo src={spotify} alt='Spotify logo' />
      </Link>   
      <LibraryContainer>  
        <LibraryItem gradient>
        </LibraryItem>
      </LibraryContainer>
      <PlaylistContainer>
        <ScrollContainer>
          <Playlists />
        </ScrollContainer>
      </PlaylistContainer>
    </SideContainer>
  );
};
export default Sidebar;
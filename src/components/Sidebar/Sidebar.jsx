import React from 'react'; 
import { Link } from 'react-router-dom';
import Playlists from '../../containers/Playlists/Playlists';
import spotify from '../../assets/images/spotify.png';
import {
  SectionTitle
} from '../../components/LibraryItem/playlistItemStyles';
import {
  SideContainer,
  SpotifyLogo,
  LibraryContainer,
  LibraryItem,
  ScrollContainer,
  PlaylistContainer,
} from './sidebarStyles';
const Sidebar = () => {
  return (
    <SideContainer>

      <Link to='/app'>
       <SpotifyLogo src={spotify} alt='Spotify logo' />
      </Link> 

      <LibraryContainer>  
        <SectionTitle>Playlist :)</SectionTitle>
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
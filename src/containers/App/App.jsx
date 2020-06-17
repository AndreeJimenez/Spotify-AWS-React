import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
import { GridContainer, SectionContainer } from './appStyles';
import Login from '../Auth/Login';
import User from '../User/User';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Playlist from '../Playlists/Playlist';
import Track from '../Track/Track';
import ModalsContextContainer from '../../components/ModalsContext/ModalsContextContainer';
import info from '../../components/TeamInfo/info.jsx';
import team from '../../components/TeamInfo/team.jsx';
export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <ModalsContextContainer>
      <GridContainer>
        <Sidebar />
        <SectionContainer
          onScroll={e => {
            let opacity = (300 - (300 - e.target.scrollTop)) / 300;
            opacity = opacity > 1 ? 1 : opacity;

            document.documentElement.style.setProperty('--opacity', opacity);
            document.documentElement.style.setProperty(
              '--scroll-top',
              e.target.scrollTop
            );
          }} >
          <Navbar />
          <Switch>
            <Route path='/' component={Login} exact />
            <Route path='/app' component={Dashboard} exact />
            <Route path='/app/user/:name' component={User} exact />
            <Route path='/app/playlist/:id' component={Playlist} exact />
            <Route path='/app/collection/tracks' component={Playlist} />
            <Route path='/app/about' component={info} />
            <Route path='/app/team' component={team}/>
            <Route
              path='*'
              component={() => <h1 style={{ color: 'red' }}>NO SE ENCONTRÓ NADA PANA :(</h1>}
              exact
            />
          </Switch>
        </SectionContainer>
        <Track />
      </GridContainer>
    </ModalsContextContainer>
  </BrowserRouter>
);

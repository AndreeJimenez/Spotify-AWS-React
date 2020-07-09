import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// reducers
import authReducer from './containers/Auth/authReducer';
import dashboardReducer from './containers/Dashboard/dashboardReducer';
import userReducer from './containers/User/userReducer';
import playlistsReducer from './containers/Playlists/playlistsReducer';
import trackReducer from './containers/Track/trackReducer';
import FolderReducer from './containers/Folders/FoldersReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user']
};

const playlistsPersistConfig = {
  key: 'playlists',
  storage,
  whitelist: ['list']
};

const trackPersistConfig = {
  key: 'track',
  storage,
  whitelist: ['song']
};

const folderPersistConfig = {
  key: 'folder',
  storage,
  whitelist: ['list']
};

export default history =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    dashboard: dashboardReducer,
    user: userReducer,
    playlists: persistReducer(playlistsPersistConfig, playlistsReducer),
    track: persistReducer(trackPersistConfig, trackReducer),
    folder: persistReducer(folderPersistConfig, FolderReducer),
    router: connectRouter(history)
  });

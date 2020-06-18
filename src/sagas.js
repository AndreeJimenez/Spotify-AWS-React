import { all, fork } from 'redux-saga/effects';

// sagas
import authSaga from './containers/Auth/authSaga';
import dashboardSaga from './containers/Dashboard/dashboardSaga';
import playlistsSaga from './containers/Playlists/playlistsSaga';
import userSaga from './containers/User/userSaga';
import trackSaga from './containers/Track/trackSaga';
import foldersSaga from './containers/Folders/FoldersSaga';


export default function* root() {
  yield all([
    fork(authSaga),
    fork(dashboardSaga),
    fork(userSaga),
    fork(playlistsSaga),
    fork(trackSaga),
    fork(foldersSaga)
  ]);
}

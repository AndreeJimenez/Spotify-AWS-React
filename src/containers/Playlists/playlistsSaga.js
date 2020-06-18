import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './playlistsConstants';
import * as actions from './playlistsActions';
import * as services from './playlistsServices';

function* getUserPlaylists() {
  try {
    const { items: playlists } = yield services.getUserPlaylists();
    if (playlists) yield put(actions.getUserPlaylistsSuccess({ playlists }));
  } catch (err) {
    yield put(actions.getUserPlaylistsFailure({ error: err.message }));
  }
}

function* getUserPlaylistsSaga() {
  yield takeLatest(constants.GET_USER_PLAYLISTS_START, getUserPlaylists);
}

// playlist
function* getPlaylist({ payload: { id } }) {
  try {
    const playlist = yield services.getPlaylist(id);
    if (playlist) yield put(actions.getPlaylistSuccess({ playlist }));
  } catch (err) {
    yield put(actions.getPlaylistFailure({ error: err.message }));
  }
}

function* getPlaylistSaga() {
  yield takeLatest(constants.GET_PLAYLIST_START, getPlaylist);
}

// Tracks
function* getUserTracks() {
  try {
    const tracks = yield services.getUserTracks();
    if (tracks)
      yield put(actions.getUserTracksSuccess({ playlist: { tracks } }));
  } catch (err) {
    yield put(actions.getUserTracksFailure({ error: err.message }));
  }
}

function* getUserTracksSaga() {
  yield takeLatest(constants.GET_USER_TRACKS_START, getUserTracks);
}

function* checkUserFollowThePlaylist({ payload: { playlistId, userId } }) {
  try {
    const following = yield services.checkUserFollowPlaylist(
      playlistId,
      userId
    );
    if (following)
      yield put(
        actions.checkUserFollowPlaylistSuccess({ following: following[0] })
      );
  } catch (err) {
    yield put(actions.checkUserFollowPlaylistFailure({ error: err.message }));
  }
}

function* checkUserFollowThePlaylistSaga() {
  yield takeLatest(
    constants.CHECK_USER_FOLLOW_PLAYLIST_START,
    checkUserFollowThePlaylist
  );
}

// follow unfollow
function* followUnfollowPlaylist({
  payload: { playlistId, action = 'follow', userId },
}) {
  try {
    yield services.followUnfollowPlaylist(playlistId, action);
    yield put(actions.followPlaylistSuccess());
    yield checkUserFollowThePlaylist({ payload: { playlistId, userId } });
    yield getUserPlaylists();
  } catch (err) {
    yield put(actions.followPlaylistFailure({ error: err.message }));
  }
}

function* followUnfollowPlaylistSaga() {
  yield takeLatest(constants.FOLLOW_PLAYLIST_START, followUnfollowPlaylist);
}

function* checkLikeSong() {
  try {
    const { items } = yield services.getUserTracks();
    if (items.length)
      yield put(
        actions.checkLikeSongSuccess({
          songs: items.map(({ track }) => track.id),
        })
      );
  } catch (err) {
    yield put(actions.checkLikeSongFailure({ error: err.message }));
  }
}

function* checkLikeSongSaga() {
  yield takeLatest(constants.CHECK_LIKE_SONG_START, checkLikeSong);
}

function* likeSong({ payload: { songId, action } }) {
  try {
    yield services.likeSong(songId, action);
    yield checkLikeSong();
  } catch (err) {
    yield put(actions.likeSongFailure({ error: err.message }));
  }
}

function* likeSongSaga() {
  yield takeLatest(constants.LIKE_SONG_START, likeSong);
}

export default function* playlistsSaga() {
  yield all([
    fork(getUserPlaylistsSaga),
    fork(getPlaylistSaga),
    fork(getUserTracksSaga),
    fork(checkUserFollowThePlaylistSaga),
    fork(followUnfollowPlaylistSaga),
    fork(likeSongSaga),
    fork(checkLikeSongSaga),
  ]);
} 




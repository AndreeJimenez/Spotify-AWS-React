import * as constants from './playlistsConstants';

export const getUserPlaylistsStart = () => ({
  type: constants.GET_USER_PLAYLISTS_START,
});

export const getUserPlaylistsSuccess = payload => ({
  type: constants.GET_USER_PLAYLISTS_SUCCESS,
  payload,
});

export const getUserPlaylistsFailure = payload => ({
  type: constants.GET_USER_PLAYLISTS_FAILURE,
  payload,
});

// Playlist
export const getPlaylistStart = payload => ({
  type: constants.GET_PLAYLIST_START,
  payload,
});

export const getPlaylistSuccess = payload => ({
  type: constants.GET_PLAYLIST_SUCCESS,
  payload,
});

export const getPlaylistFailure = payload => ({
  type: constants.GET_PLAYLIST_FAILURE,
  payload,
});

// Tracks
export const getUserTracksStart = payload => ({
  type: constants.GET_USER_TRACKS_START,
  payload,
});

export const getUserTracksSuccess = payload => ({
  type: constants.GET_USER_TRACKS_SUCCESS,
  payload,
});

export const getUserTracksFailure = payload => ({
  type: constants.GET_USER_TRACKS_FAILURE,
  payload,
});

// follow / unfollow
export const checkUserFollowPlaylistStart = payload => ({
  type: constants.CHECK_USER_FOLLOW_PLAYLIST_START,
  payload,
});

export const checkUserFollowPlaylistSuccess = payload => ({
  type: constants.CHECK_USER_FOLLOW_PLAYLIST_SUCCESS,
  payload,
});

export const checkUserFollowPlaylistFailure = payload => ({
  type: constants.CHECK_USER_FOLLOW_PLAYLIST_FAILURE,
  payload,
});

export const followPlaylistStart = payload => ({
  type: constants.FOLLOW_PLAYLIST_START,
  payload,
});

export const followPlaylistSuccess = payload => ({
  type: constants.FOLLOW_PLAYLIST_SUCCESS,
  payload,
});

export const followPlaylistFailure = payload => ({
  type: constants.FOLLOW_PLAYLIST_FAILURE,
  payload,
});

export const likeSongStart = payload => ({
  type: constants.LIKE_SONG_START,
  payload,
});

export const likeSongFailure = payload => ({
  type: constants.LIKE_SONG_FAILURE,
  payload,
});

export const checkLikeSongStart = payload => ({
  type: constants.CHECK_LIKE_SONG_START,
  payload,
});

export const checkLikeSongSuccess = payload => ({
  type: constants.CHECK_LIKE_SONG_SUCCESS,
  payload,
});

export const checkLikeSongFailure = payload => ({
  type: constants.CHECK_LIKE_SONG_FAILURE,
  payload,
});

export const cleanPlaylist = () => ({
  type: constants.CLEAN_PLAYLIST,
});
//AWS METODOS

//GET
export const getAWSPlaylistsStart = () => ({
  type: constants.GET_AWS_PLAYLIST_START,
});

export const getAWSPlaylistsSuccess = payload => ({
  type: constants.GET_AWS_PLAYLIST_SUCCESS,
  payload,
});

export const getAWSPlaylistsFailure = payload => ({
  type: constants.GET_AWS_PLAYLIST_FAILURE,
  payload,
});

//PUT
export const putAWSPlaylistsStart = () => ({
  type: constants.PUT_AWS_PLAYLIST_START,
});

export const putAWSPlaylistsSuccess = payload => ({
  type: constants.PUT_AWS_PLAYLIST_SUCCESS,
  payload,
});

export const putAWSPlaylistsFailure = payload => ({
  type: constants.PUT_AWS_PLAYLIST_FAILURE,
  payload,
});

//DELETE
export const deleteAWSPlaylistsStart = () => ({
  type: constants.DELETE_AWS_PLAYLIST_START,
});

export const deleteAWSPlaylistsSuccess = payload => ({
  type: constants.DELETE_AWS_PLAYLIST_SUCCESS,
  payload,
});

export const deleteAWSPlaylistsFailure = payload => ({
  type: constants.DELETE_AWS_PLAYLIST_FAILURE,
  payload,
});

//POST
export const postAWSPlaylistsStart = () => ({
  type: constants.POST_AWS_PLAYLIST_START,
}); 

export const postAWSPlaylistsSuccess = payload => ({
  type: constants.POST_AWS_PLAYLIST_SUCCESS,
  payload,
});

export const postAWSPlaylistsFailure = payload => ({
  type: constants.POST_AWS_PLAYLIST_FAILURE,
  payload,
});


import api from '../../utils/api';

export const getUserPlaylists = () =>
  api('https://api.spotify.com/v1/me/playlists');

export const getPlaylist = id =>
  api(
    `https://api.spotify.com/v1/playlists/${id}?type=track%2Cepisode&market=from_token`
  );

export const getPlaylistTracks = id =>
  api(`https://api.spotify.com/v1/playlists/${id}/tracks`);

export const getUserTracks = () => api(`https://api.spotify.com/v1/me/tracks`);

export const checkUserFollowPlaylist = (playlistId, userId) =>
  api(
    `https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${userId}`
  );

export const followUnfollowPlaylist = (playlistId, action) =>
  api(
    `https://api.spotify.com/v1/playlists/${playlistId}/followers`,
    action === 'follow' ? 'PUT' : 'DELETE'
  );

export const likeSong = (songId, action) =>
  api(
    `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
    action === 'follow' ? 'PUT' : 'DELETE'
  );

export const getUserSongs = () => api(`https://api.spotify.com/v1/me/tracks`);

//AWS MÉTODOS

//GET
export const getAWSPlaylists = () =>
  api('https://qdiov34mx3.execute-api.us-east-1.amazonaws.com/prod/api/v2/playlist');

//GET BY ID
export const getAWSPlaylist = idPlaylist =>
  api(
    `https://qdiov34mx3.execute-api.us-east-1.amazonaws.com/prod/api/v2/playlist/${idPlaylist}`
  );
//POST
export const postAWSPlaylists = () =>
  api('https://qdiov34mx3.execute-api.us-east-1.amazonaws.com/prod/api/v2/playlist');

//PUT
export const putAWSPlaylists = (idPlaylist) =>
  api(`https://qdiov34mx3.execute-api.us-east-1.amazonaws.com/prod/api/v2/playlist/${idPlaylist}`);

//DELETE
export const deleteAWSPlaylists = (idPlaylist) =>
  api(
    `https://qdiov34mx3.execute-api.us-east-1.amazonaws.com/prod/api/v2/playlist/${idPlaylist}`,
  );

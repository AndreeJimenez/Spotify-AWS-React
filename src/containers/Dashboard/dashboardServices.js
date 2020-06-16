import api from '../../utils/api';

export const getRecentlyPlayed = () =>
  api(
    'https://api.spotify.com/v1/me/player/recently-played?type=track&limit=5'
  );
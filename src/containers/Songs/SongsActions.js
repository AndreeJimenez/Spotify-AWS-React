import * as constants from './SongsConstants';
//AWS METODOS

//GET
export const getAWSSongsStart = () => ({
  type: constants.GET_AWS_SONGS_START,
});

export const getAWSSongsSuccess = payload => ({
  type: constants.GET_AWS_SONGS_SUCCESS,
  payload,
});

export const getAWSSongsFailure = payload => ({
  type: constants.GET_AWS_SONGS_FAILURE,
  payload,
});

//PUT
export const putAWSSongsStart = () => ({
  type: constants.PUT_AWS_SONGS_START,
});

export const putAWSSongsSuccess = payload => ({
  type: constants.PUT_AWS_SONGS_SUCCESS,
  payload,
});

export const putAWSSongsFailure = payload => ({
  type: constants.PUT_AWS_SONGS_FAILURE,
  payload,
});

//DELETE
export const deleteAWSSongsStart = () => ({
  type: constants.DELETE_AWS_SONGS_START,
});

export const deleteAWSSongsSuccess = payload => ({
  type: constants.DELETE_AWS_SONGS_SUCCESS,
  payload,
});

export const deleteAWSSongsFailure = payload => ({
  type: constants.DELETE_AWS_SONGS_FAILURE,
  payload,
});

//POST
export const postAWSSongsStart = () => ({
  type: constants.POST_AWS_SONGS_START,
}); 

export const postAWSSongsSuccess = payload => ({
  type: constants.POST_AWS_SONGS_SUCCESS,
  payload,
});

export const postAWSSongsFailure = payload => ({
  type: constants.POST_AWS_SONGS_FAILURE,
  payload,
});


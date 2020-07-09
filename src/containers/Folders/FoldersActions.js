import * as constants from './FoldersConstants';
//AWS METODOS

//GET
export const getAWSFoldersStart = () => ({
  type: constants.GET_AWS_FOLDERS_START,
});

export const getAWSFoldersSuccess = payload => ({
  type: constants.GET_AWS_FOLDERS_SUCCESS,
  payload,
});

export const getAWSFoldersFailure = payload => ({
  type: constants.GET_AWS_FOLDERS_FAILURE,
  payload,
});

//PUT
export const putAWSFoldersStart = () => ({
  type: constants.PUT_AWS_FOLDERS_START,
});

export const putAWSFoldersSuccess = payload => ({
  type: constants.PUT_AWS_FOLDERS_SUCCESS,
  payload,
});

export const putAWSFoldersFailure = payload => ({
  type: constants.PUT_AWS_FOLDERS_FAILURE,
  payload,
});

//DELETE
export const deleteAWSFoldersStart = () => ({
  type: constants.DELETE_AWS_FOLDERS_START,
});

export const deleteAWSFoldersSuccess = payload => ({
  type: constants.DELETE_AWS_FOLDERS_SUCCESS,
  payload,
});

export const deleteAWSFoldersFailure = payload => ({
  type: constants.DELETE_AWS_FOLDERS_FAILURE,
  payload,
});

//POST
export const postAWSFoldersStart = () => ({
  type: constants.POST_AWS_FOLDERS_START,
}); 

export const postAWSFoldersSuccess = payload => ({
  type: constants.POST_AWS_FOLDERS_SUCCESS,
  payload,
});

export const postAWSFoldersFailure = payload => ({
  type: constants.POST_AWS_FOLDERS_FAILURE,
  payload,
});

export const cleanFolder = () => ({
  type: constants.CLEAN_FOLDER,
});

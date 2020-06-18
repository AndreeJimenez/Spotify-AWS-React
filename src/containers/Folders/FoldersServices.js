import api from '../../utils/api';
//AWS MÉTODOS

//GET
export const getAWSSongs = () =>
  api('https://kfk4cy8t0l.execute-api.us-east-1.amazonaws.com/prod/api/v2/folders');

//GET BY ID
export const getAWSSong = name =>
  api(
    `https://kfk4cy8t0l.execute-api.us-east-1.amazonaws.com/prod/api/v2/folders/${name}`
  );
//POST
export const postAWSPlaylists = (name, idUser) =>
  api('https://kfk4cy8t0l.execute-api.us-east-1.amazonaws.com/prod/api/v2/folders');

//PUT
export const putAWSPlaylists = (name, idUser) =>
  api(`https://kfk4cy8t0l.execute-api.us-east-1.amazonaws.com/prod/api/v2/folders/${name}`);

//DELETE
export const deleteAWSPlaylists = (name) =>
  api(
    `https://kfk4cy8t0l.execute-api.us-east-1.amazonaws.com/prod/api/v2/folders/${name}`,
  );

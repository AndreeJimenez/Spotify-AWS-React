import api from '../../utils/api';
//AWS MÉTODOS

//GET
export const getAWSSongs = () =>
  api('https://l4iama4y07.execute-api.us-east-1.amazonaws.com/prod/api/v2/songs');

//GET BY ID
export const getAWSSong = idCancion =>
  api(
    `https://l4iama4y07.execute-api.us-east-1.amazonaws.com/prod/api/v2/songs/${idCancion}`
  );
//POST
export const postAWSPlaylists = (idCancion, idUser) =>
  api('https://l4iama4y07.execute-api.us-east-1.amazonaws.com/prod/api/v2/songs');

//PUT
export const putAWSPlaylists = (idCancion, idUser) =>
  api(`https://l4iama4y07.execute-api.us-east-1.amazonaws.com/prod/api/v2/songs/${idCancion}`);

//DELETE
export const deleteAWSPlaylists = (idCancion) =>
  api(
    `https://l4iama4y07.execute-api.us-east-1.amazonaws.com/prod/api/v2/songs/${idCancion}`,
  );

import axios from 'axios';

const baseUrl = 'https://www.omdbapi.com';
const apiKey = 'baf9f676';

export default (
  method,
  path,
  data,
  queryParams = {},
  headers = {}
) => axios({
  method,
  url: `${baseUrl}${path}`,
  data,
  params: {
    apiKey,
    ...queryParams
  },
  headers
});

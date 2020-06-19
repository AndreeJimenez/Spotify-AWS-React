const AWS = require('aws-sdk');

function createFolder(){
  return new Promise((resolve, reject) => {
    const client = new AWS.Lambda({
      region: 'us-east-1'
    });

    const params = {
      FunctionName: 'spotify-playlist-folders',
      Payload: JSON.stringify({

      })
    }
  });

  client.invoka(params, (err, data) => {
    if(err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
}


const request = require('request-promise');
const config = require('../config.js');


let getReposByUsername = ({username}) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  return request(options);
}

module.exports = getReposByUsername;
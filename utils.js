const axios = require('axios');

const { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_API_URL } = process.env;
const AUTH_HEADER = {
  Authorization: `token ${GITHUB_TOKEN}`,
};
const PULLS_ENDPOINT = `${GITHUB_API_URL}/repos/${GITHUB_REPOSITORY}/pulls`;

async function getPullRequests() {
    console.log(PULLS_ENDPOINT);
    return axios({
      method: 'GET',
      url: PULLS_ENDPOINT,
      headers: AUTH_HEADER,
    });
}

module.exports = {
    getPullRequests
};

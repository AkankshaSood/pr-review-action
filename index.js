const axios = require('axios');
const core = require('@actions/core');
const { getPullRequests } = require('./utils');


function sendNotification() {
  return axios({
    method: 'POST',
    url: 'https://hooks.slack.com/services/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',
    data: {
      channel: '#actions',
      username: 'Pull Request reviews reminder',
      text: "Yo Yo Dance!",
    }
  });
}



(async () => {
    try {
        //Git Info
        const gitSlackUsername = core.getInput('git-slack-username');
        const ignoreLabel = core.getInput('git-ignore-label');
        core.info('Getting open pull requests...');
        const pullRequests = await getPullRequests();
        core.info(pullRequests.data);
    } catch(err) {
        core.setFailed(err);
    }
})();

const core = require('@actions/core');
const github = require('@actions/github');

try {
    const ip = "1.2.3.4";
    const url = core.getInput('url');
    console.log(`Service URL: ${url}`);
    console.log(`IP: ${ip}`);
    core.setOutput("ip", ip);
} catch (error) {
    core.setFailed(error.message);
}
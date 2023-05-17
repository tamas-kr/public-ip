import fetch from "node-fetch";

const core = require('@actions/core');
const github = require('@actions/github');

try {
    const url = core.getInput('url');

    let response;

    response = await fetch(url);

    if (response?.ok) {
        var ip = response.text();
        console.log(ip);
        core.setOutput(ip);
    } else {
        core.setFailed(`HTTP Response Code: ${response?.status}`);
    }
} catch (error) {
    core.setFailed(error.message);
}
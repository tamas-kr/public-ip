import fetch from "node-fetch";

const core = require('@actions/core');
const github = require('@actions/github');

try {
    const url = core.getInput('url');

    fetch(url)
        .then(response => response.text())
        .then(text => {
            core.setOutput("ip", text);
        });
} catch (error) {
    core.setFailed(error.message);
}
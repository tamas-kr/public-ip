import fetch from "node-fetch";

const core = require('@actions/core');
const github = require('@actions/github');

try {
    const url = core.getInput('url');
    let ip = "";

    fetch(url)
        .then(response => {
            var body = response.text();
            console.log(body);
            return body;
        })
        .then(text => ip = text);

    console.log(`Service URL: ${url}`);
    console.log(`IP: ${ip}`);
    core.setOutput("ip", ip);
} catch (error) {
    core.setFailed(error.message);
}
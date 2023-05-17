import fetch from "node-fetch";

const core = require('@actions/core');
const github = require('@actions/github');

(async function GetIp() {

  const response = await fetch(core.getInput('url'));

  if (!response.ok) {
    core.setFailed(`HTTP error: ${response.status}`);
    return;
  }

  const text = await response.text();
  console.log(text);

  core.setOutput("ip", text);

})()
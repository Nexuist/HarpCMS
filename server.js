const { spawn } = require("child_process");
const fs = require("fs");
const express = require("express");
const APIServer = express();

APIServer.listen(8080, () => console.log("Online!"));

const previewServer = express();
previewServer.use(express.static("repo/universityhigh.github.io"));
previewServer.listen(8081, () => console.log("Preview server online"));
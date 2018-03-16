const REPO_NAME = "universityhigh.github.io";
const LOCATION_LOCALS = "_harponica/_locals.json";
const LOCATION_GLOBALS = "_harponica/_globals.json";

/* THE PART BELOW DOESN'T NEED TO BE MODIFIED */


const { spawn } = require("child_process");
const fs = require("fs");
const express = require("express");
const api = express();
api.use(express.static("frontend"));

api.get("/api/:file(locals|globals)/:page?", (req, res, next) => {
    let filePath = req.params.file == "locals" ? LOCATION_LOCALS : LOCATION_GLOBALS;
    fs.readFile(`repo/${REPO_NAME}/${filePath}`, (err, data) => {
        res.setHeader("Content-Type", "application/json");
        try {
            let json = JSON.parse(data);
            res.send(req.params.page ? json[req.params.page] : json);
        }
        catch (err) {
            res.status(500);
            res.send(`Couldn't complete request: ${err}`);
        }
    });
});


api.listen(8080, () => console.log("API Online"));

const previewServer = express();
previewServer.use(express.static("repo/universityhigh.github.io"));
previewServer.listen(8081, () => console.log("Preview Online"));
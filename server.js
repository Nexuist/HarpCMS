const REPO_NAME = "universityhigh.github.io";
const LOCATION_LOCALS = "_harponica/_locals.json";
const LOCATION_GLOBALS = "_harponica/_globals.json";

/* THE PART BELOW DOESN'T NEED TO BE MODIFIED */

const fs = require("fs");
const { exec } = require("child_process");
const express = require("express");
const api = express();
api.use(express.static("frontend"));
api.use(express.json());
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

function getJSON(file, key) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      try {
        let json = JSON.parse(data);
        resolve(key ? json[key] : json);
      } catch (err) {
        reject(err);
      }
    });
  });
}

function run(command) {
  return new Promise((resolve, reject) => {
    exec(
      command,
      {
        cwd: `repo/${REPO_NAME}`
      },
      (err, stdout, stderr) => {
        err ? reject(err) : resolve();
      }
    );
  });
}

api.get("/api/:file(locals|globals)/:page?", (req, res) => {
  let file = req.params.file == "locals" ? LOCATION_LOCALS : LOCATION_GLOBALS;
  let filePath = `repo/${REPO_NAME}/${file}`;
  getJSON(filePath, req.params.page)
    .then(json => {
      res.send(json);
    })
    .catch(err => {
      res.status(500);
      res.send(`Couldn't complete request: ${err}`);
    });
});

api.post("/api/:file(locals|globals)/:page", (req, res) => {
  let file = req.params.file == "locals" ? LOCATION_LOCALS : LOCATION_GLOBALS;
  let filePath = `repo/${REPO_NAME}/${file}`;
  getJSON(filePath, null)
    .then(json => {
      // It's technically possible to insert new keys into the file using this method, but that's a feature, not a bug :)
      json[req.params.page] = req.body;
      fs.writeFile(filePath, JSON.stringify(json, null, 2), err => {
        if (!err) return res.send("Success!");
        res.status(500);
        res.send(`Unable to save changes: ${err}`);
      });
    })
    .catch(err => {
      res.status(500);
      res.send(`Couldn't complete request: ${err}`);
    });
});

api.get("/api/compile", (req, res) => {
  run("harponica compile _harponica/ .")
  .then(result => {
    res.send("Success!");
  })
  .catch(err => {
    res.status(500);
    res.send(err);
  });
});

api.get("/api/reset", (req, res) => {
  run("git reset --hard").then(result => {
    res.send("Success!");
  })
  .catch(err => {
    res.status(500);
    res.send(err);
  });
});

api.listen(8080, () => console.log("API Online"));
const previewServer = express();
previewServer.use(express.static("repo/universityhigh.github.io"));
previewServer.listen(8081, () => console.log("Preview Online"));

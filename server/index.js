const express = require('express');
const gitRepos = require('../helpers/github')
const bodyParser = require('body-parser');
const db = require('../database/index');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {

  gitRepos(req.body)
    .then(repos => db.save(JSON.parse(repos)))
    .catch(err => {
      console.log('Error getting user repos:', err);
    });

  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


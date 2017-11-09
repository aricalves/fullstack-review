const express = require('express');
const gitRepo = require('../helpers/github')
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // save the repo information in the database
  gitRepo(req.body)
    .then(repos => {
      console.log('User repos:', repos);
      // TODO: write the data to the db
    })
    .catch(err => {
      console.log('API call error', err);
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


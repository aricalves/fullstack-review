const express = require('express');
const getReposThenSave = require('../helpers/github')
const bodyParser = require('body-parser');
const db = require('../database');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  getReposThenSave(req.body)
    .then(repos => db.save(JSON.parse(repos)))
    .then(() => {
      res.end();
    })
    .catch(err => {
      console.log('Error saving user repos:', err);
      res.send('Error saving repos to DB')
      res.end();
    });

});

app.get('/repos', function (req, res) {
  Promise.resolve(db.find())
    .then(repos => res.send(repos))
    .catch(err => res.send(err))
    .then(() => res.end());
});

let port = 1128;

app.listen(port, () => {
  console.log(`( ͡° ͜ʖ ͡°)☞  ${port}`);
});


const mongoose = require('mongoose');
const _ = require('lodash');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});
const db = mongoose.connection;

db.on('error', (err) => {
  console.error.bind(console, err);
})

db.on('open', () => {
  console.log('db online')
})

const repoSchema = mongoose.Schema({
  id: { type: String, unique: true},
  repo_name: String,
  owner: String,
  avatar: String,
  url: String,
  forks: Number,
  description: String
});

const Repo = mongoose.model('Repo', repoSchema);

const mongifyRepos = function(repos) {
  return _.map(repos, function(repo) {
    return new Repo({
      id: repo.id,
      repo_name: repo.name,
      owner: repo.owner.login,
      avatar: repo.owner.avatar_url,
      url: repo.owner.html_url,
      forks: repo.forks,
      description: repo.description
    });
  });
};

const save = function(repos) {
  return _.map(mongifyRepos(repos), function(repo) {
    return repo.save(function(err) {
      if (err) console.log(err);
    });
  });
}

const findReposWithMostForks = function() {
  return Repo
    .find()
    .limit(25)
    .sort('-forks')
    .exec((err, value) => {
      if (err) console.log(err);
      return value;
    });
}

module.exports.save = save;
module.exports.find = findReposWithMostForks;











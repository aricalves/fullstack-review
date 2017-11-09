const mongoose = require('mongoose');
const _ = require('lodash');

mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

const repoSchema = mongoose.Schema({
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
      repo_name: repo.name,
      owner: repo.owner.login,
      avatar: repo.owner.avatar_url,
      url: repo.url,
      forks: repo.forks,
      description: repo.description
    });
  });
};

const save = function(repos) {
  _.each(mongifyRepos(repos), function(repo) {
    repo.save(function(err) {
      if (err) return handlError(err);
      console.log('db success')
    });
  });
}

module.exports.save = save;
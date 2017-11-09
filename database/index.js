const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoose: true});

mongoose.on('error', console.error.bind(console, 'connection error:'));

let repoSchema = mongoose.Schema({
  repo_name: String,
  owner: String,
  avatar: String,
  url: String,
  forks: Number,
  description: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;
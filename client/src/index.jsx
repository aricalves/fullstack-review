import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListItem from './components/RepoListItem.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  updateRepos(newRepos) {
    this.setState({
      repos: newRepos
    })
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    fetch('/repos')
      .then(response => response.json())
      .then(data => this.updateRepos(data))
      .catch(err => {throw err});
  }

  search(term) {
    console.log(`${term} was searched`);
    $.post('/repos',
      {
        'Content-Type': 'application/json',
        'username': term
      },
      (err, message, data) => {
        if (err) console.log('Error ¯\\_(ツ)_/¯ ', err);
        this.getRepos();
    });
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
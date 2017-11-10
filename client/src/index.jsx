import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'react-fetch';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

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
    console.log(this.state)
  }

  componentDidMount() {
    fetch('/repos')
      .then(response => response.json())
      .then(data => this.updateRepos(data))
      .catch(err => console.log(err));
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
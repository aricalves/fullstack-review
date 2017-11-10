import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repos from './components/Repos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
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

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <Repos />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
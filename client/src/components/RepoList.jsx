import React from 'react';
import RepoListItem from './RepoListItem.jsx';


const RepoList = (props) => (
  <div>
      <h4> Repo List Component </h4>
      <div>
        {props.repos.map((repo, index) => (
          <RepoListItem repo={repo} key={index} />
        ))}
      </div>
  </div>
)

export default RepoList;
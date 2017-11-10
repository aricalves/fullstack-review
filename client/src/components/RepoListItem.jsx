import React from 'react';

const RepoListItem = (props) => (
  <div>
    <div>
      <img src={props.repo.avatar} style={{width: 75, height: 75}}></img>
      <a href={props.repo.url} target="_blank"><h3>{props.repo.owner}</h3></a>
    </div>
    <div>
      <a href={props.repo.repo_url} target="_blank"><h4>{props.repo.repo_name}</h4></a>
      <p>Forks: {props.repo.forks}</p>
      <p>{props.repo.description}</p>
    </div>
  </div>
)

export default RepoListItem;
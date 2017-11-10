import React from 'react';
import Fetch from 'react-fetch'


const RepoList = (props) => (

  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;
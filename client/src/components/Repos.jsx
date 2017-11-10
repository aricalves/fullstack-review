import React from 'react'
import Fetch from 'react-fetch'
 
class Repos extends React.Component{
 
  render(){
    return (
      <Fetch url="/repos">
        <TestComponent/>
      </Fetch>
    )
  }
 
}
 
class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}

export default Repos;



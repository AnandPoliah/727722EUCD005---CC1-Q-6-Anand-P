import React, { Component } from 'react'
import './App2.css';

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={input: "Sunny"}
  }
  handlechange=()=>
  {
    this.setState((prevState)=>({input: prevState.input="Cloudy"}))
  }

  render() {
    return (
     
      <div className='outerdiv'>
      <div>
      
      <h2>City: {this.props.cityname}</h2>
      <h2>Weather: {this.state.input}</h2>
<button className='button-64' onClick={this.handlechange} >Refresh</button>
      </div>
      </div>
    )
  }
}
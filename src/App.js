import React, { Component } from 'react';
import './App.css'

export default class AddToCart extends Component
 {
  constructor(props) 
  {
    super(props)
    this.state = {count: (parseInt(props.age))}
  }

  handleDecrement = () => {
    this.setState(prevState => {
        if (prevState.count > 0) {
            return {
                count: prevState.count - 1
            }
        } else {
            return {
                count: 0
            }
        }
    })
  };

  handleIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  };


    render() {
    return (
      <div className="outerdiv">
              <h2> Name: {this.props.name}</h2>
              <h2>Age : {this.props.age}</h2>
              <div className="Buttondiv">
                <button onClick={this.handleDecrement} className="button-64">AGE INC</button>
                <span className='value'>{this.state.count }</span>
  
                <button onClick={this.handleIncrement} className="button-64">AGE DEC</button>
                </div>
         </div>   
    )
  }
}
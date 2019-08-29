import React, { Component } from 'react';

export default class Cell extends Component {
    
  // we use the constructor to set the INITIAL STATE
  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }
 
  // our increment method makes use of the 'setState' method, which is what we use to alter state
  increment = () => {
    const newCount = '#333'
    this.setState({
      color: newCount
    })
  }

  render() {
    return (
      <div className={'cell'} onClick={this.increment} style={{backgroundColor: this.state.color}}>
        {this.state.color}
      </div>
    )
  }
    
  }
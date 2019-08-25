import React, { Component } from 'react';    //enable use of react framework


//enables Cell to be used outside of this file aka in Matrix.js
export default class Cell extends Component {

  //initialize input properties
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    } //define state as being whatever color is passed in
  }
  changeColor = () => {
    this.setState({
      color: "#333"
    })
  }
  render() {
    return (
      <div className="cell" style={{backgroundColor:this.state.color}} onClick={this.changeColor}>
      </div>
    )
  }
}

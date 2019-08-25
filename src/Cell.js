import React, { Component } from 'react';    //enable use of react framework


//enables Cell to be used outside of this file aka in Matrix.js
export default class Cell extends Component {

  //initialize input properties
  constructor(props) {
    super(props)
    // state key of 'color'
    this.state = {
      color: this.props.value
    } //state.color is initially set to the 'value' prop passed from Matrix
  }



  changeColor = () => {
    this.setState({
      color: "#333"
    })
  }

  //renders a <div> with a className of 'cell'
  render() {
    return (
      <div className="cell" style={{backgroundColor:this.state.color}} onClick={this.changeColor}>
      </div>
    )
  }
}

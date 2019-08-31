import React, { Component } from 'react';

class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: props.value
    }
  }

  coloronClick = () => {
    this.setState({
      color: '#333'
    })
  }

  render(){
    return(
      <div className='cell'style={{backgroundColor: this.state.color}} onClick={this.coloronClick}></div>
    )
  }
}
export default Cell;

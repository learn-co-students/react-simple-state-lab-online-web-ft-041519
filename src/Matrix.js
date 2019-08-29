import React, { Component } from 'react';
import Cell from '../src/Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (function prac() {
    const firstRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    const firstRow2 = []
    for (let i = 0; i < 10; ++i) {
      firstRow2.push(firstRow)
    }
    return firstRow2
  })()
}


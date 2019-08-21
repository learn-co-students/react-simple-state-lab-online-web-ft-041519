import React, * as react from 'react';
import { defaultPattern } from './data.js'
import Cell from './Cell.js'

export default class Matrix extends react.Component {
  
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
  values: defaultPattern
}
import React, { Component } from 'react';

export default class Cell extends Component {

    constructor()

    render() {
        return (
            <div className="cell">{this.props.val}</div>
        )
    }
}
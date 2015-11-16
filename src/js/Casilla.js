/*
 * Module dependencies
 */

import React from 'react';

let boxStyle = {
    height: '100px',
    width : '100px'
};

export default class Casilla extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    onClick(ev)
    {
        if(this.props.value === "-")
            this.props.click.call(null, this.props.rowIndex, this.props.columnIndex)
    }
    render()
    {
        return(
            <button style={boxStyle} className={this.props.value === "-" ? "clickable" : "no_clickable"} onClick={this.onClick}>
                {this.props.value}
            </button>
        );
    }
}

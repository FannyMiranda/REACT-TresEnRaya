/*
 * Module dependencies
 */

import React from 'react';

let cellStyle =
{
    height: '100px',
    width : '100px'
};

export default class Cell extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    onClick(ev)
    {
        if(this.props.value === "-")
            this.props.click.call(null, this.props.rowIndex, this.props.columnIndex);
    }
    render()
    {
        return(
            <button style={cellStyle} className={this.props.value === "-" ? "clickable" : "no_clickable"} onClick={this.onClick}>
                {this.props.value}
            </button>
        );
    }
}

/*
 * Module dependencies
 */

import React from 'react';

const boxStyle = {
    height: '100px',
    width : '100px'
};

export default class Casilla extends React.Component
{
    boxClick(ev)
    {
        this.props.handleClick(this.props.rowIndex, this.props.columnIndex)
    }
    render()
    {
        return(

<button style={boxStyle} onClick={this.boxClick.bind(this)}>
    {this.props.value}
</button>

        );
    }
}

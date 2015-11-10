/*
 * Module dependencies
 */

import React from 'react';
import Casilla from './Casilla';

export default class Tablero extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            clicks: 0,
            values: [
                ['-', '-', '-'],
                ['-', '-', '-'],
                ['-', '-', '-']
            ]
        };
        this.boardClick = this.boardClick.bind(this);
    }
    boardClick(rowIndex, columnIndex)
    {
        var values = this.state.values;
        var newValue = 'X';
        if(this.state.clicks % 2 === 0)
            newValue = 'O';
        values[rowIndex][columnIndex] = newValue;
        this.setState({
            clicks: this.state.clicks + 1,
            values: this.state.values
        });
    }
    render()
    {
        return(

<div>
    <div>
        <Casilla value={this.state.values[0][0]} rowIndex={0} columnIndex={0} handleClick={this.boardClick}/>
        <Casilla value={this.state.values[0][1]} rowIndex={0} columnIndex={1} handleClick={this.boardClick}/>
        <Casilla value={this.state.values[0][2]} rowIndex={0} columnIndex={2} handleClick={this.boardClick}/>
    </div>
    <div>
         <Casilla value={this.state.values[1][0]} rowIndex={1} columnIndex={0} handleClick={this.boardClick}/>
         <Casilla value={this.state.values[1][1]} rowIndex={1} columnIndex={1} handleClick={this.boardClick}/>
         <Casilla value={this.state.values[1][2]} rowIndex={1} columnIndex={2} handleClick={this.boardClick}/>
    </div>
    <div>
        <Casilla value={this.state.values[2][0]} rowIndex={2} columnIndex={0} handleClick={this.boardClick}/>
        <Casilla value={this.state.values[2][1]} rowIndex={2} columnIndex={1} handleClick={this.boardClick}/>
        <Casilla value={this.state.values[2][2]} rowIndex={2} columnIndex={2} handleClick={this.boardClick}/>
    </div>
</div>

        );
    }
}

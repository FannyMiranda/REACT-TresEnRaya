/*
 * Module dependencies
 */

import React  from 'react';
import Board  from './Board';
import Header from './Header';
import Reset  from './Reset';
import Alert  from './Alert';

let JUGADORX = 'JUGADOR 1 -> X';
let JUGADOR0 = 'JUGADOR 2 -> 0';

export default class ReactApp extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
			values: [
                ['-', '-', '-'],
                ['-', '-', '-'],
                ['-', '-', '-']
            ],
            turn  : JUGADORX,
            winner: '',
            tie   : 0
        };

        this.reset       = this.reset.bind(this);
        this.onClick     = this.onClick.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
    }
    reset()
    {
        for(var i=0; i<3 ; i++)
        {
            for(var j=0; j<3 ; j++)
                this.state.values[i][j] = '-';
        }

        let values = this.state.values;
        let turn   = this.state.turn === JUGADORX ? JUGADOR0 : JUGADORX;
        let winner = '';
        let tie    = 0;

        this.setState({
            values: values,
            turn  : turn,
            winner: winner,
            tie   : tie
        });
    }
    onClick(rowIndex, columnIndex)
    {
        // Values
        let newValue = this.state.turn === JUGADORX ? 'X' : '0';
        this.state.values[rowIndex][columnIndex] = newValue;

        // Winner

        // Check column
        var count = 0;

        for(var i=0; i<3; i++)
        {
            if(i != rowIndex)
            {
                if(this.state.values[i][columnIndex] == newValue)
                    count++;
            }
        }
        this.checkWinner(count);

        // Check row
        count = 0;

        for(var i=0; i<3; i++)
        {
            if(i != columnIndex)
            {
                if(this.state.values[rowIndex][i] == newValue)
                    count++;
            }
        }
        this.checkWinner(count);

        // Check descending diagonal
        count = 0;

        for(var i=0; i<3; i++)
        {
            if((i != columnIndex) && (i != rowIndex))
            {
                if(this.state.values[i][i] == newValue)
                    count++;
            }
        }
        this.checkWinner(count);

        // Check ascending diagonal
        count = 0;

        for(var i=0; i<3; i++)
        {
            for(var j=0; j<3; j++)
            {
                if((j != columnIndex) && (i != rowIndex))
                {
                    if((this.state.values[i][j] == newValue) && ((i + j) == 2))
                        count++;
                }
            }
        }
        this.checkWinner(count);

        // Tie
        this.state.tie++;
        if((this.state.tie === 9) && (this.state.winner === ""))
            this.state.winner = "EMPATE";

        let values = this.state.values;
        let turn   = this.state.turn === JUGADORX ? JUGADOR0 : JUGADORX;
        let winner = this.state.winner;
        let tie    = this.state.tie;

        this.setState({
            values: values,
            turn  : turn,
            winner: winner,
            tie   : tie
        });
    }
    checkWinner(count)
    {
        if((count == 2) && (this.state.winner === ""))
            this.state.winner = this.state.turn;
    }
    render()
    {
        return(
        	<div>
	        	<Header
	        		text = {"TURNO DEL " + this.state.turn} />
	        	<Board
	        		values  = {this.state.values}
	        		onClick = {this.onClick} />
                <Reset
                    text  = {"RESET"}
                    click = {this.reset} />
                <Alert
                    winner = {this.state.winner} />
        	</div>
        );
    }
}

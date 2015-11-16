/*
 * Module dependencies
 */

import React from 'react';
import Tablero from './Tablero';
import Cabecera from './Cabecera';

let JUGADORX = "Jugador 1 -> X";
let JUGADOR0 = "Jugador 2 -> 0";

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
			turn  : JUGADORX,
			values: [
                ['-', '-', '-'],
                ['-', '-', '-'],
                ['-', '-', '-']
            ]
        };

        this.onClick = this.onClick.bind(this);
    }
    onClick(rowIndex, columnIndex)
    {
        let newValue = this.state.turn === JUGADORX ? 'X' : '0';

        this.state.values[rowIndex][columnIndex] = newValue;

        let turn   = this.state.turn === JUGADORX ? JUGADOR0 : JUGADORX;
        let values = this.state.values;

        this.setState({
            turn  : turn,
            values: values
        });
    }
    render()
    {
    	let text = "Turno del " + this.state.turn;

        return(
        	<div>
	        	<Cabecera
	        		text = {text} />
	        	<Tablero
	        		values  = {this.state.values}
	        		onClick = {this.onClick} />
        	</div>
        );
    }
}

/*
 * Module dependencies
 */

import React from 'react';

export default class Alert extends React.Component
{
    render()
    {
        if(this.props.winner === "EMPATE")
            alert(this.props.winner + ", ¿Quieres jugar otra partida?");
        else if(this.props.winner != "")
            alert("Ha ganado el " + this.props.winner);

        return(
            <div></div>
        );
    }
}

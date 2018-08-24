/*
 * Module dependencies
 */

import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

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

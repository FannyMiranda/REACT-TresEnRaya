/*
 * Module dependencies
 */

import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import Cell  from './Celda';

export default class Board extends React.Component
{
    render()
    {
        let board = this.props.values.map((rowValues, rowIndex) => {

            let row = rowValues.map((value, columnIndex) => {
                return(
                    <Cell
                        key         = {"" + rowIndex + columnIndex}
                        value       = {value}
                        rowIndex    = {rowIndex}
                        columnIndex = {columnIndex}
                        click       = {this.props.onClick} />
                );
            });
            return(
                <div key={"fila"+rowIndex}>
                    {row}
                </div>
            );
        });

        return(
            <div>
                {board}
            </div>
        );
    }
}

/*
 * Module dependencies
 */

import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

export default class Reset extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    onClick(ev)
    {
        this.props.click.call(null)
    }
    render()
    {
        return(
            <button onClick={this.onClick}>
                {this.props.text}
            </button>
        );
    }
}

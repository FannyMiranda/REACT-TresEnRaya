/*
 * Module dependencies
 */

import React from 'react';

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

/*
 * Module dependencies
 */

import React from 'react';

export default class Cabecera extends React.Component
{
    render()
    {
        return(
            <header>
            	{this.props.text}
            </header>
        );
    }
}

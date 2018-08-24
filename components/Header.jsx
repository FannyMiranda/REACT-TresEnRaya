/*
 * Module dependencies
 */

import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

export default class Header extends React.Component
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

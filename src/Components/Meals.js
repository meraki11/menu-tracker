import React, { Component } from 'react';
import MenuForm from './MenuForm'

export default class Meals extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <>
                <MenuForm />
            </>
        );
    }
}
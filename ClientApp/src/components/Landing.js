import React, { Component } from 'react';
import Logo from './Logo';
import NavButton from './NavButton';
import '../css/Global.css';

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <Logo />
                <NavButton />
            </React.Fragment >
        );
    }
}
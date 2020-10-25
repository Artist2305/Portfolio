import React, { Component } from 'react';
import Logo from './Logo';
import NavButton from './NavButton';
import '../css/Global.css';
import '../css/Landing.css'
import LandingText from './Landing-Text';

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="landing-container">
                    <Logo />
                    <NavButton />
                    <LandingText />
                </div>
            </React.Fragment >
        );
    }
}
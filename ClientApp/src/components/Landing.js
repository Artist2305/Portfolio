import React, { Component } from 'react';
import '../css/Global.css';
import '../css/Landing.css'
import LandingText from './Landing-Text';
import SquaresBackground from './SquaresBackground';

export default class Landing extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="landing-container" id="homeSection">
                    <SquaresBackground />
                    <LandingText />
                </div>
            </React.Fragment >
        );
    }
}
import React, { Component } from 'react';
import '../css/Global.css';
import '../css/Landing.css'
import LandingText from './Landing-Text';
import SquaresBackground from './SquaresBackground';

export default class Landing extends Component {
    componentDidMount() {
        this.props.switchProjectDetailsStatus(false);
    }
    componentDidUpdate() {
            setTimeout(() => {
                this.props.whereToScroll(this.props.chosedRef);
            }, 50);
    }
    render() {
        return (
            <React.Fragment>
                <div className="landing-container" id="homeSection">
                    <SquaresBackground isLoading={this.props.isLoading} />
                    <LandingText isLoading={this.props.isLoading} />
                </div>
            </React.Fragment >
        );
    }
}
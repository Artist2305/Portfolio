import React, { Component } from 'react';
import '../css/Global.css';
import '../css/Landing.css'
import LandingText from './Landing-Text';
import SquaresBackground from './SquaresBackground';

export default class Landing extends Component {

    appRun = false;
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.switchProjectDetailsStatus(false);
    }

    componentDidUpdate() {
            setTimeout(() => {
                this.props.whereToScroll(this.props.chosedRef);
                console.log("from time out " + this.props.chosedRef);
                console.log(this.props.chosedRef);
                
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
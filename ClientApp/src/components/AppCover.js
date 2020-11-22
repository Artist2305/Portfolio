import React, { Component} from 'react';
import '../css/AppCover.css';
import LogoImg from '../svg/logo.svg';

export default class AppCover extends Component {
    constructor(props) {
        super(props)

  
    }
    render() {
        return (
            <div className={"app-cover-container center-all col" + (this.props.isLoading ? "" : " disable")} >
                <div>
                    <div className="loading-logo center-all">
                        <img src={LogoImg} ></img>
                    </div>
                    <div>
                        <h1 className="hello-text anim-writer">
                            Hi, I'm <span>Mateusz Szostek</span>
                    </h1>
                    </div>
                    <div>
                        <h1 className="hello-text anim-writer">
                            Web developer
                    </h1>
                    </div>
                    <div className="indicator-wrap center-all">
                        <div className="loading-indicator"></div>
                        <div className="loading-indicator"></div>
                        <div className="loading-indicator"></div>
                    </div>   
                </div>           
            </div>
        );
    }
}
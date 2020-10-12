import React, { Component } from 'react';
import '../css/Logo.css';

import LogoImg from '../svg/logo.svg';

export default class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="left-corner-wrap">
                    <div className="left-corner">
                        <div className="row">
                            <div className="col">
                                <div className="logo">
                                    <img src={LogoImg} ></img>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="name">Mateusz Szostek</div>
                                </div>
                                <div className="row">
                                    <div className="proffesion">SOFTWARE DEVELOPER</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}



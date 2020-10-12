import React, { Component } from 'react';
import '../css/NavButton.css';
import MenuBtn from '../svg/menu-btn.svg';


export default class NavButton extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="right-corner-wrap">
                    <div className="right-corner">
                        <div className="row align-content-right">
                            <div className="col">
                                <div className="menu-text center-all">MENU</div>
                            </div>
                            <div className="col">
                                <img className="menu-btn" src={MenuBtn} ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}
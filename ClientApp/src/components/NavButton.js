import React, { Component } from 'react';
import '../css/NavButton.css';

export default class NavButton extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="right-corner-wrap">
                    <div className="row align-content-right">
                        <div className="col">
                            <div className="menu-text center-all" >MENU</div>
                        </div>
                        <div className="col">
                            <div className={"menu-button" + (this.props.isMenuActive ? " open" : "") +
                            (this.props.isButtonHover ? " hover" : "")} onMouseEnter={this.props.handleMouseEnter}
                                onClick={this.props.handleButtonClick}
                                onMouseLeave={this.props.handleMouseLeave}>
                                <div className="menu-element"></div>
                                <div className="menu-element"></div>
                               <div className="menu-element"></div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </React.Fragment >
        );
    }
}
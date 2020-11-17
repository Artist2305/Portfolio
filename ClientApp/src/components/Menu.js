import React, { Component, useState, useEffect} from 'react';
import '../css/Menu.css';

export default class Menu extends Component {   
    render() {
        return (
            <div className="menu-wrap col center-all">
                <div className={"cover" + (this.props.isMenuActive ? " active" : "")}></div>
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <a className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => { this.props.handleClickLinkBtn(this.props.landingPos) }}
                    >HOME</a>
                    <div className="menu-underline"></div>
                </div>
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <a className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => { this.props.handleClickLinkBtn(this.props.projectsPos) }}
                    >PROJECTS</a>
                    <div className="menu-underline"></div>
                </div>
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <a className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => { this.props.handleClickLinkBtn(this.props.aboutMePos) }}
                    >ABOUT ME</a>
                    <div className="menu-underline"></div>
                </div>
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <a className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => { this.props.handleClickLinkBtn(this.props.contactMePos)}}
                    >CONTACT</a>
                    <div className="menu-underline"></div>
                </div>
                <h6 className={"menu-footer" + (this.props.isMenuActive ? " active" : "")}>Created in Wellingborough by Mateusz Szostek with passion</h6>

                {/* 
                 <div className="cover"></div>
                <div className="menu-link">
                    <a className="menu-link-span" onClick={() => this.handleClickLinkBtn(position[0])}>HOME</a>
                    <div className="menu-underline"></div>
                </div>
                <div className="menu-link">
                    <a className="menu-link-span" onClick={() => this.handleClickLinkBtn(position[1])}>PROJECTS</a>
                    <div className="menu-underline"></div>
                </div>
                <div className="menu-link">
                    <a className="menu-link-span" onClick={() => this.handleClickLinkBtn(position[2])}>ABOUT ME</a>
                    <div className="menu-underline"></div>
                </div>
                <div className="menu-link">
                    <a className="menu-link-span" onClick={() => this.handleClickLinkBtn(position[3])}>CONTACT</a>
                    <div className="menu-underline"></div>
                </div>
                <h6 className="menu-footer">Created in Wellingborough by Mateusz Szostek with passion</h6>
                 */}
            </div>
        );
    }
}
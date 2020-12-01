import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

export default class Menu extends Component {   

    render() {
        return (
            <div className={"menu-wrap col center-all" + (this.props.isMenuActive ? " active" : "")}>
                <div className={"cover" + (this.props.isMenuActive ? " active" : "")}></div>
                <div className={"cover-side" + (this.props.isCoverActive ? " active-side" : "")}></div>
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <Link to="/" className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => {
                            this.props.handleClickLinkBtn(this.props.landingRef);
                            this.props.switchCoverStatus(false);
                        }}
                    >HOME</Link>
                    <div className="menu-underline"></div>
                </div>
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <Link to="/" className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => {
                            this.props.handleClickLinkBtn(this.props.projectsRef);
                            this.props.switchCoverStatus(false);
                        }}
                    >PROJECTS</Link >
                    <div className="menu-underline"></div>
                </div>
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <Link to="/" className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => {
                            this.props.handleClickLinkBtn(this.props.aboutMeRef);
                            this.props.switchCoverStatus(false);
                        }}
                    >ABOUT ME</Link >
                    <div className="menu-underline"></div>
                </div>
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <Link to="/" className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => {
                            this.props.handleClickLinkBtn(this.props.contactMeRef);
                            this.props.switchCoverStatus(false);
                        }}
                    >CONTACT</Link >
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
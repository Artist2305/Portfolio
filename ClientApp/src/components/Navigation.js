import React, {Component, useState, useEffect } from 'react';
//import '../css/Navigation.css';
import NavButton from './NavButton';
import Menu from './Menu';
import Logo from './Logo';

let menuHover = false;
let menuOpen = false;

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
            buttonHover: false
        }
    }
 
    handleClickMenuBtn = () => {
        if (!menuOpen) {
            this.setState({ menuActive: true })
            menuOpen = true;
        }
        else {
            this.setState({ menuActive: false });
            menuOpen = false;
        }
    }
    handleMouseEnterMenuBtn = () => {
        if (!menuHover) {
            this.setState({ buttonHover: true });
            menuHover = true;
        }
    }
    handleMouseLeaveMenuBtn = () => {
        if (menuHover) {
            this.setState({ buttonHover: false });
            menuHover = false;
        }
    }
    handleClickLinkBtn = (amount) => {
        console.log('method has been started');
        window.scrollBy(0, amount);
        this.setState({ menuActive: false });
        menuOpen = false;
    }
 
        render() {
       // const [position] = useSectionPosition();
        return (
            <React.Fragment>
                <NavButton
                    isButtonHover={this.state.buttonHover}
                    isMenuActive={this.state.menuActive}
                    handleButtonClick={this.handleClickMenuBtn}
                    handleMouseLeave={this.handleMouseLeaveMenuBtn}
                    handleMouseEnter={this.handleMouseEnterMenuBtn}
                />
                <Menu
                    isMenuActive={this.state.menuActive}
                    handleClickLinkBtn={this.handleClickLinkBtn}
                    landingPos={this.props.landingPos}
                    projectsPos={this.props.projectsPos}
                    aboutMePos={this.props.aboutMePos}
                    lastesOnBlogPos={this.props.lastesOnBlogPos}
                    contactMePos={this.props.contactMePos}

                    handlePosition={this.props.handlePosition}
                />
                <Logo isMenuActive={this.state.menuActive} />
            </React.Fragment>
        );
    }
}
import React, {Component} from 'react';
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
    handleClickLinkBtn = (ref) => {
        this.setState({ menuActive: false });
        menuOpen = false;
        this.props.choseRef(ref);
        this.props.switchLinkStatus(true);
    }
 
        render() {
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
                    landingRef={this.props.landingRef}
                    projectsRef={this.props.projectsRef}
                    aboutMeRef={this.props.aboutMeRef}
                    lastesOnBlogRef={this.props.lastesOnBlogRef}
                    contactMeRef={this.props.contactMeRef}
                    isCoverActive={this.props.isCoverActive}
                    switchCoverStatus={this.props.switchCoverStatus}

                    handlePosition={this.props.handlePosition}
                />
                <Logo isMenuActive={this.state.menuActive} />
            </React.Fragment>
        );
    }
}
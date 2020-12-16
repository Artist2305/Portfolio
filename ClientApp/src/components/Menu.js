import React, { Component } from 'react';
import '../css/Menu.css';
import MenuLink from './MenuLink';

export default class Menu extends Component {   
    constructor(props) {
        super(props)
    }
    render() {
        const refs = [
            {
                id: 1,
                refer: this.props.landingRef,
                name: "HOME"
            },
            {
                id: 2,
                refer: this.props.projectsRef,
                name: "PROJECTS"
            },
            {
                id: 3,
                refer: this.props.aboutMeRef,
                name: "ABOUT ME"
            },
            {
                id: 4,
                refer: this.props.contactMeRef,
                name: "CONTACT"
            }
        ]

        const links = refs.map(s => <MenuLink
            key={s.id}
            isMenuActive={this.props.isMenuActive}
            handleClickLinkBtn={this.props.handleClickLinkBtn}
            switchCoverStatus={this.props.switchCoverStatus}
            refer={s.refer}
            name={s.name}
        >
        </MenuLink>);
        return (
            <div className={"menu-wrap col center-all" + (this.props.isMenuActive ? " active" : "")}>
                <div className={"cover" + (this.props.isMenuActive ? " active" : "")}></div>
                <div className={"cover-side" + (this.props.isCoverActive ? " active-side" : "")}></div>
                    {links}
                <h6 className={"menu-footer" + (this.props.isMenuActive ? " active" : "")}>Created in Wellingborough by Mateusz Szostek with passion</h6>
            </div>
        );
    }
}
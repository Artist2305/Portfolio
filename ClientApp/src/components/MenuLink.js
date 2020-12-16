import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

export default class Menu extends Component {   
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className={"menu-link" + (this.props.isMenuActive ? " active" : "")}>
                    <Link to="/" className={"menu-link-span" + (this.props.isMenuActive ? " active" : "")}
                        onClick={() => {
                            this.props.handleClickLinkBtn(this.props.refer);
                            this.props.switchCoverStatus(false);
                        }}
                >{this.props.name}</Link>
                    <div className="menu-underline"></div>
                </div>
        );
    }
}
import React, { Component} from 'react';
import { Link } from "react-router-dom";
import '../css/Project.css';
import Arrow from '../svg/arrow.svg';

export default class Project extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="project-wrapper">
                    <div className="project" data-aos="fade-up">
                        <div className="project-title">
                            <h4>{this.props.data.date}</h4>
                            <h3>{this.props.data.name}</h3>
                            <div className="row flex-wrap ">
                                <Link to={this.props.data.link} onClick={() => { this.props.switchCoverStatus(true) }} className="center-all">DETAILS
                            <img src={Arrow}></img>
                                </Link>
                                <Link style={this.props.data.code ? {} : { display: "none" }} to="/test" className="center-all">CODE<img src={Arrow} ></img>
                                </Link>

                                <Link style={this.props.data.live ? {} : { display: "none" }} to="/test" className="center-all">LIVE<img src={Arrow} ></img>
                                </Link>

                                <Link style={this.props.data.download ? {} : { display: "none" }} to="/test" className="center-all">DOWNLOAD<img src={Arrow} ></img>
                                </Link>
                            </div>

                        </div>
                        <img src={this.props.image} ></img>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}
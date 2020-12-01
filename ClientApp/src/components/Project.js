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
                <div className="project" data-aos="fade-up">
                    <h4>{this.props.data.date}</h4>
                    <h3>{ this.props.data.name}</h3>
                    <div className="row">
                        <Link to={this.props.data.link} onClick={() => { this.props.switchCoverStatus(true)}}className="center-all">LIVE
                            <img src={Arrow}></img>
                        </Link>
                        <span>|</span>
                        <Link to="/sadsdfassdfadsgdf" className="center-all">CODE<img src={Arrow} ></img>
                        </Link>
                    </div>
                    <div className="project-image">

                    </div>
                </div>
            </React.Fragment >
        );
    }
}
import React, { Component } from 'react';
import '../css/ProjectDetails.css';
import {motion } from 'framer-motion'

export default class ProjectDetails extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.switchProjectDetailsStatus(true);
        this.props.switchCoverStatus(false);
    }

    pageTransition = {
        in: {
            x: ["-120vw", "-10vw", "0vw"],
            opacity: [0, 0, 1],
            times: [0, 0.5, 1],
            duration: 0.6,
            ease: "ease",
        },
        out: {
            x: ["0vw", "-10vw", "-120vw"],
            opacity: [1, 0, 0],
            times: [0, 0.5, 1],
            duration: 0.6,
            ease: "ease",
        },
    }

    render() {
        const roles = this.props.projectData.role.map(s => <p key={s.id}>{s.name}</p>);
        const technologies = this.props.projectData.technologies.map(s => <p key={s.id}>{s.name}</p>);
        return (
            <motion.div initial="out" animate="in" exit="out" variants={this.pageTransition}>
                <div className="project-detail-container">
                    <div className="details-container">
                        <div className="project-details">
                            <h2>{this.props.projectData.date}</h2>
                            <h1>{this.props.projectData.name}</h1>
                            <h6>MY ROLE</h6>
                            {roles}
                            <h6>TECHNOLOGIES</h6>
                            {technologies}
                            {this.props.projectData.client == "" ? <h6></h6> :
                                <React.Fragment>
                                    <h6>CLIENT</h6>
                                    <p>{this.props.projectData.client}</p>
                                </React.Fragment>}
                        </div>
                        <div className="project-desc">
                            <p>{this.props.projectData.description} </p>
                        </div>
                    </div>
                    <div className="details-buttons center-all">
                        <div className="details-btn center-all">
                            <a href="">LIVE</a>
                            <div className="btn-underline"></div>
                        </div>
                        <div className="details-btn center-all">
                            <a href="">GITHUB</a>
                            <div className="btn-underline"></div>
                        </div>
                        <div className="details-btn center-all">
                            <a href="">DOWNLOAD</a>
                            <div className="btn-underline"></div>
                        </div>
                    </div>
                    <div className="pictures-container">
                        <div className="project-img">
                            <img src=""></img>
                        </div>
                        <div className="project-img">
                            <img src=""></img>
                        </div>
                        <div className="project-img">
                            <img src=""></img>
                        </div>
                    </div>
                    <div className="testimonial-container center-all">
                        <div className="center-all">
                            <h6>CLIENT TESTIMONIAL</h6>
                        </div>
                        <div className="center-all">
                            <p>“{this.props.projectData.testimonial}“</p>
                        </div>

                    </div>
                    <div className="other-projects center-all">
                        <div className="center-all other-project-link">
                            <h6 href="">SEE ALSO</h6>
                        </div>
                        <div className="center-all other-project-link">
                            <a href="">PROJECT 1</a>
                            <div className="btn-underline"></div>
                        </div>
                        <div className="center-all other-project-link">
                            <a href="">PROJECT 1</a>
                            <div className="btn-underline"></div>
                        </div>
                        <div className="center-all other-project-link">
                            <a href="">PROJECT 1</a>
                            <div className="btn-underline"></div>
                        </div>
                        <div className="center-all other-project-link">
                            <a href="">PROJECT 1</a>
                            <div className="btn-underline"></div>
                        </div>
                    </div>
                    <div className="det-buttons center-all">
                        <div className="det-btn center-all">
                            <a href="">BACK</a>
                            <div className="det-underline"></div>
                        </div>
                        <div className="det-btn center-all">
                            <a href="">NEXT</a>
                            <div className="det-underline"></div>
                        </div>
                    </div>
                </div>
            </motion.div >
        )
    }

}
import React, { Component } from 'react';
import '../css/ProjectDetails.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class ProjectDetails extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            links: [],
            backNext: ["",""]
        })
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        var links = this.generateLinks(this.props.links);
        var backNext = this.generateNextAndPrevious(this.props.links);
        this.props.switchProjectDetailsStatus(true);
        this.props.switchCoverStatus(false);
        this.setState({
            links: links
        })
        this.setState({
            backNext: backNext
        })
    }

    generateLinks = (links) => {
        let arr = [...links];
        let l = arr.lenght;
        arr.splice((this.props.projectData.id - 1), 1);
        return arr;
    }
    generateNextAndPrevious = (linksData) => {
        let linkNext;
        let linkBack;

        let current = parseInt(this.props.projectData.id) - 1;

        if (current == 0) {
            linkBack = linksData[linksData.length - 1];
            linkNext = linksData[current + 1];
        }
        else if (current == linksData.length - 1) {
            linkNext = linksData[0];
            linkBack = linksData[current - 1];
        }
        else {
            linkNext = linksData[current + 1];
            linkBack = linksData[current - 1]
        }

        return [linkBack, linkNext];
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
        const roles = this.props.projectData.roles.map(s => <p key={s.id}>{s.name}</p>);
        const technologies = this.props.projectData.technologies.map(s => <p key={s.id}>{s.name}</p>);
        const otherProjects = this.state.links.map(s =>
            <div className="center-all other-project-link">
                <Link to={s} onClick={() => { this.props.switchCoverStatus(true) }} className="center-all">{s.substring(1)}</Link>
                <div className="btn-underline"></div>
            </div>)
        const screens = this.props.screens.map(s => <div key={s.id} className="project-img">
            <LazyLoadImage
                src={s.image}
                effect="blur"
                width="100%"
                afterLoad={ () => console.log("zaladowane")} />
        </div>);
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
                        {screens}
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
                        {otherProjects}
                    </div>
                    <div className="det-buttons center-all">
                        <div className="det-btn center-all">
                            <Link to={this.state.backNext[0]} onClick={() => { this.props.switchCoverStatus(true) }} className="center-all">BACK</Link>
                            <div className="det-underline"></div>
                        </div>
                        <div className="det-btn center-all">
                            <Link to={this.state.backNext[1]} onClick={() => { this.props.switchCoverStatus(true) }} className="center-all">NEXT</Link>
                            <div className="det-underline"></div>
                        </div>
                    </div>
                </div>
            </motion.div >
        )
    }

}
import React, { Component } from 'react';
import '../css/Projects.css';
import Project from './Project';
import SectionTitle from './SectionTitle';
import { titleSquareData_1 } from '../js/TitleSquaresData';
import SaperLogicImg from '../img/saper_logic.jpg';
import MagicWanderImg from '../img/magic_wander.jpg';

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modifier: 0
        }
    }

    projectImages = [
        SaperLogicImg,
        MagicWanderImg,
        SaperLogicImg,
        MagicWanderImg,
        SaperLogicImg,
        MagicWanderImg
    ]

    getModifier = () => {
        if (window.innerWidth >= 541) {
            return 1;
        }
        else if (window.innerWidth < 541 && window.innerWidth >= 371) {
            return 0.6;
        }
        else {
            return 0.4;
        }
    }
    handleModifier = () => {
        this.setState({
            modifier: this.getModifier()
        });
    };
    componentDidMount() {
        this.handleModifier();
        window.addEventListener("resize", this.handleModifier);
        window.addEventListener("load", this.handleModifier);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleModifier);
        window.removeEventListener("load", this.handleModifier);
    }
    render() {
        const projects = this.props.projectsData.map(s => <Project
            key={s.id}
            data={s}
            switchCoverStatus={this.props.switchCoverStatus}
            image={this.projectImages[s.id]}
        ></Project>);
        const squares = titleSquareData_1;
        return (
            <div className="col center-all" id="projectsSection">
                <div className="projects-container col">
                    <SectionTitle item={squares} modifier={this.state.modifier} />
                    <div className="projects" data-aos="fade-up">
                        {projects}
                    </div>
                </div>
            </div>
        );
    }
}

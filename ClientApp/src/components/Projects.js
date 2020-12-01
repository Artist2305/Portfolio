import React, { useEffect, useState, Component } from 'react';
import '../css/Projects.css';
import Project from './Project';
import SectionTitle from './SectionTitle';
import { titleSquareData_1 } from '../js/TitleSquaresData'

/*
const getModifier = () => {
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
*/
/*
const useModifier = () => {
    const [modifier, setModifier] = useState([getModifier()]);
    useEffect(() => {
        const handleModifier = () => {
            setModifier([getModifier()]);
        };
        window.addEventListener("resize", handleModifier);
        return () => {
            window.removeEventListener("resize", handleModifier);
        };
    }, []);
    return modifier;
}
*/


export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modifier: 0
        }
    }

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
        window.addEventListener("resize", this.handleModifier);
        window.addEventListener("load", this.handleModifier);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleModifier);
        window.removeEventListener("load", this.handleModifier);
    }

    render() {
        const squares = titleSquareData_1;
        return (
            <div className="col center-all" id="projectsSection">
                <div className="projects-container col">
                    <SectionTitle item={squares} modifier={this.state.modifier} />
                    <div className="projects" data-aos="fade-up">
                        <Project data={this.props.projectsData[0]} switchCoverStatus={this.props.switchCoverStatus}/>
                        <Project data={this.props.projectsData[1]} switchCoverStatus={this.props.switchCoverStatus}/>
                        <Project data={this.props.projectsData[2]} switchCoverStatus={this.props.switchCoverStatus}/>
                        <Project data={this.props.projectsData[3]} switchCoverStatus={this.props.switchCoverStatus}/>
                    </div>
                </div>
            </div>
        );
    }
}

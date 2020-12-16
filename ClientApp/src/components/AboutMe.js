import React, { Component} from 'react';
import '../css/AboutMe.css';

export class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainDescription: "",
            secondaryDescription: "",
            services: "",
            technologies: "",
            tools: ""
        }
    }
    componentDidMount() {
        fetch('api/aboutMe')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    mainDescription: data.mainDescription,
                    secondaryDescription: data.secondaryDescription,
                    services: data.services,
                    technologies: data.technologies,
                    tools: data.tools,
                })
            })
    }
    colors = {
        firstColor: "#BC8ED9",
        secondColor: "#F28E8E",
        thirdColor: "#5DAEEA"
    }
    render() {
        return (
            <div className="about-me-container" id="aboutMeSection" data-aos="fade-up">
                <div className="section-title" data-aos="fade-up">
                    <h2>ABOUT ME</h2>
                </div>
                <div className="col center-all about-me-desc">
                    <p data-aos="fade-up">{this.state.mainDescription}</p>
                    <p data-aos="fade-up">{this.state.secondaryDescription}</p>
                    <div className="square square-1"></div>
                    <div className="square square-2"></div>
                    <div className="square square-3"></div>
                </div>
                <div className="about-me-details " data-aos="fade-up">
                    <div className="col about-me-element center-horz" data-aos="fade-up">
                        <div className="row center-all">
                            <h5>SERVICES I PROVIDE</h5>
                        </div>
                        <div className="row underline-square" style={{ backgroundColor: this.colors.firstColor }}></div>
                        <div className="row center-all">
                            <p>{this.state.services}</p>
                        </div>
                    </div>
                    <div className="col about-me-element center-horz" data-aos="fade-up">
                        <div className="row center-all">
                            <h5>TECHNOLOGIES I USE</h5>
                        </div>
                        <div className="row underline-square" style={{ backgroundColor: this.colors.secondColor }}></div>
                        <div className="row center-all">
                            <p>{this.state.technologies}</p>
                        </div>
                    </div>
                    <div className="col about-me-element center-horz" data-aos="fade-up">
                        <div className="row center-all">
                            <h5>TOOLS I USE</h5>
                        </div>
                        <div className="row underline-square" style={{ backgroundColor: this.colors.thirdColor }}></div>
                        <div className="row center-all">
                            <p>{this.state.tools}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutMe
import React, { Component } from 'react';
import '../css/ProjectDetails.css';

export default class ProjectDetails extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.switchProjectDetailsStatus(true);
    }

    render() {
        return (
            <React.Fragment >
                <div className="project-detail-container">
                    <div className="details-container">
                        <div className="project-details">
                            <h2>2020</h2>
                            <h1>PROJECT NAME</h1>
                            <h6>MY ROLE</h6>
                            <p>ROLE 1</p>
                            <p>ROLE 2</p>
                            <p>ROLE 3</p>
                            <h6>TECHNOLOGIES</h6>
                            <p>TECHNOLOGY 1</p>
                            <p>TECHNOLOGY 2</p>
                            <p>TECHNOLOGY 3</p>
                            <p>TECHNOLOGY 4</p>
                            <p>TECHNOLOGY 5</p>
                            <h6>CLIENT</h6>
                            <p>CLIENT NAME</p>
                        </div>
                        <div className="project-desc">
                            <p>Project description Proin laoreet turpis ut euismod fringilla. Quisque viverra ultricies pharetra. Maecenas semper luctus urna. Praesent dolor sem, consectetur id vulputate at, iaculis et nisi. Nullam dapibus elementum felis vel hendrerit. Ut vulputate rhoncus turpis a molestie.
Proin laoreet turpis ut euismod fringilla. Quisque viverra ultricies pharetra. Maecenas semper luctus urna. Praesent dolor sem, consectetur id vulputate at, iaculis et nisi. Nullam dapibus elementum felis vel hendrerit. Ut vulputate rhoncus turpis a molestie.  </p>
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
                            <p>“Proin laoreet turpis ut euismod fringilla. Quisque viverra ultricies pharetra. Maecenas semper luctus urna. Praesent dolor sem, consectetur id vulputate at, iaculis et nisi. Nullam dapibus elementum felis vel hendrerit. Ut vulputate rhoncus turpis a molestie. Proin laoreet turpis ut euismod fringilla. Quisque viverra ultricies pharetra. Maecenas semper luctus urna. Praesent dolor sem, consectetur id vulputate at, iaculis et nisi. Nullam dapibus elementum felis vel hendrerit. Ut vulputate rhoncus turpis a molestie. “</p>
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
                </div>
            </React.Fragment >
        )
    }

}
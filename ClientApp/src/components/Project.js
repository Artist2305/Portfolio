import React from 'react';
import '../css/Project.css';
import Arrow from '../svg/arrow.svg';

const Project = () => {

        return (
            <React.Fragment>
                <div className="project" data-aos="fade-up">
                    <h4>2020</h4>
                    <h3>Browser Game</h3>
                    <div className="row">
                        <a href="" className="center-all">LIVE<img src={Arrow} ></img>
                        </a>
                        <span>|</span>
                        <a href="" className="center-all">CODE<img src={Arrow} ></img>
                        </a>
                    </div>
                    <div className="project-image">

                    </div>
                </div>
            </React.Fragment >
        );
}

export default Project
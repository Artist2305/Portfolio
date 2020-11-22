import React from 'react';
import '../css/SectionTitle.css';

const Project = (props) => {
    const squares = props.item.map(s => <div className="title-square" key={s.id} style={
        {
            left: (s.left * props.modifier) + "px",
            top: (s.top * props.modifier) + "px",
            width: (s.width * props.modifier) + "px",
            height: (s.height * props.modifier) + "px",
            backgroundColor: s.backgroundColor
        }
    }> </div>)
        return (
            <React.Fragment>
                <div className="section-title" data-aos="fade-up">
                    {squares}

                    <h2>SELECTED PROJECTS</h2>
                </div> 
            </React.Fragment >
        );
}

export default Project
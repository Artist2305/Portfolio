import React from 'react';
import '../css/AboutMe.css';

const AboutMe = () => {

    const colors = {
        firstColor: "#BC8ED9",
        secondColor: "#F28E8E",
        thirdColor: "#5DAEEA"
    }

    return (
        <div className="about-me-container" id="aboutMeSection">
            <div className="section-title">
                <h2>ABOUT ME</h2>
            </div> 
            <div className="col center-all about-me-desc">
                <p>Duis augue eros, sagittis ac ligula sit amet, porta sollicitudin nisl. Aliquam convallis sollicitudin felis, id suscipit purus dapibus sit amet. Vestibulum eu ultrices lectus. </p>
                <p>Proin laoreet turpis ut euismod fringilla. Quisque viverra ultricies pharetra. Maecenas semper luctus urna. Praesent dolor sem, consectetur id vulputate at, iaculis et nisi. Nullam dapibus elementum felis vel hendrerit. Ut vulputate rhoncus turpis a molestie.  </p>
                <div className="square square-1"></div>
                <div className="square square-2"></div>
                <div className="square square-3"></div>
            </div>
            <div className="about-me-details ">
                <div className="col about-me-element center-horz">
                    <div className="row center-all">
                        <h5>SERVICES I PROVIDE</h5>
                    </div>
                    <div className="row underline-square" style={{ backgroundColor: colors.firstColor }}></div>
                    <div className="row center-all">
                        <p>WEB DESIGN | UX & UI | ICONOGRAPHY | PC, MOBILE & WEB DEVELOPMENT</p>
                    </div> 
                </div>
                <div className="col about-me-element center-horz">
                    <div className="row center-all">
                        <h5>TECHNOLOGIES I USE</h5>
                    </div>
                    <div className="row underline-square" style={{ backgroundColor: colors.secondColor }}></div>
                    <div className="row center-all">
                        <p>C++ | C# | HTML, CSS & JS | SASS | .DOT NET CORE | SQL | BOOTSTRAP | AJAX | GIT | REACT | REDUX</p>
                    </div>
                </div>
                <div className="col about-me-element center-horz">
                    <div className="row center-all">
                        <h5>TOOLS I USE</h5>
                    </div>
                    <div className="row underline-square" style={{ backgroundColor: colors.thirdColor }}></div>
                    <div className="row center-all">
                        <p>VISUAL STUDIO | UNITY | BLENDER 3D | FIGMA | GIMP | ILUSTRATOR </p>
                    </div>
                </div>
            </div>
        </div>

        );
}
export default AboutMe
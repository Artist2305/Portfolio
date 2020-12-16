import React, { Component } from 'react';
import '../css/Landing-Text.css'

export default class LandingText extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col center-vert landing-text-container">
                    <div className={"col landing-text" + (this.props.isLoading ? "" : " active")}>
                        <p></p>
                        <h1>I BRING YOUR PROJECTS INTO LIVE</h1>
                        <p>Duis augue eros, sagittis ac ligula sit amet, porta sollicitudin nisl. Aliquam convallis sollicitudin felis, id suscipit purus dapibus sit amet. Vestibulum eu ultrices lectus. Curabitur porta est elit. Suspendisse sagittis leo ipsum, ac pellentesque purus pulvinar at.</p>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}
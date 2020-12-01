import React from 'react';
import { useLocation } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";


const ProjectWrapper = (props) => {
    const location = useLocation();
    return (
        <ProjectDetails
            switchProjectDetailsStatus={props.switchProjectDetailsStatus}
            projectData={props.projectData}
            location={location}
            switchCoverStatus={props.switchCoverStatus}
        />
    )
}
export default ProjectWrapper;
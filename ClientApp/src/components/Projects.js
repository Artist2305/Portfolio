import React, { useEffect, useState } from 'react';
import '../css/Projects.css';
import Project from './Project';
import SectionTitle from './SectionTitle';
import { titleSquareData_1 } from '../js/TitleSquaresData'

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

const Projects = (props) => {
    const [modifier] = useModifier();
    const squares = titleSquareData_1;
    return (
        <div className="col center-all">
            <div className="projects-container col">
                <SectionTitle item={squares} modifier={modifier}/> 
                <div className="projects">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
        );
}
export default Projects
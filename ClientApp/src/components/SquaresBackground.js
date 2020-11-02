import React, { useState, useEffect } from 'react';
import '../css/SquaresBackground.css';
import '../css/Variables.css';
import Square from './Square';
import { data, dataVert } from '../js/SquaresData';

const useWindowSize = () => {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
}

const getModifier = () => {
    if (window.innerWidth >= 1370) {
        return 1;
    }
    else if (window.innerWidth < 1370 && window.innerWidth >= 1100) {
        return 0.8;
    }
    else if (window.innerWidth < 1100 && window.innerWidth >= 700) {
        return 0.6;
    }
    else if (window.innerWidth < 700 && window.innerWidth >= 420) {
        return 0.4;
    }
    else {
        return 0.33;
    }
}
const getSquareData = () => {
    if (window.innerWidth > 870) {
        return data;
    }
    else {
        return dataVert;
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
const useSquareData = () => {
    const [squareData, setSquareData] = useState([getSquareData()]);
    useEffect(() => {
        const handleSquareData = () => {
            setSquareData([getSquareData()]);
        };
        window.addEventListener("resize", handleSquareData);
        return () => {
            window.removeEventListener("resize", handleSquareData);
        };
    }, []);
    return squareData;
}

const SquaresBackground = (props) => {

    const [squareData] = useSquareData();
    const [modifier] = useModifier();

    const squares = squareData.map(s => <Square key={s.id} item={s} modifier={modifier} />);

    return(
        <div className="squares-background-container">
             {squares}
        </div >
    );


     
}
export default SquaresBackground

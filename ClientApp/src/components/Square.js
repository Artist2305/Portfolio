import React from 'react';
import '../css/Square.css';

const Square = (props) => {
    return (
        <div className="square-move">
            <div className="square-rotate" style={
                {
                    left: (props.item.left * props.modifier) + 'px',
                    top: (props.item.top * props.modifier) + 'px'
                }}>
                <div className={"square-color square-flash" +
                    (props.item.color == "#BC8ED9" ? " color-1" : "") +
                    (props.item.color == "#F28E8E" ? " color-2" : "") +
                    (props.item.color == "#5DAEEA" ? " color-3" : "")
                } style={
                    {
                        width: (props.item.size * props.modifier) + 'px',
                        height: (props.item.size * props.modifier) + 'px'
                    }
                }>
                </div >
            </div>
        </div>
    );
}

export default Square;
import React, { Component } from 'react';
import '../css/Square.css';

const Square = (props) => {
        return (
            <div className="square" style={
                {
                    left: (props.item.left * props.modifier) + 'px',
                    top: (props.item.top * props.modifier) + 'px',
                    backgroundColor: props.item.color + '',
                    width: (props.item.size * props.modifier) + 'px',
                    height: (props.item.size * props.modifier) + 'px'
                }
            }>
            </div >
    );
}

export default Square;

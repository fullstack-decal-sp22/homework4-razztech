import React, {useState} from "react";
import './styles/Square.css';

function Square(props) {
    return (
        <button onClick={props.onClick} className="square">
            {props.value}
        </button>
    );
}

export default Square;
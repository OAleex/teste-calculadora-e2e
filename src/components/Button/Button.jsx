/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Button.css';

export default props => {
    let classes = 'button ';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';
    classes += props.operator ? 'operator' : '';
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
        {props.label}
        </button>
    )
}

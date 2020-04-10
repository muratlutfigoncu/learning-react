import React from 'react';

const inputComponent = (props) => {
    return (
        <div className = "Input">            
            <input type="text" onChange={props.changed} value={props.name}/>
            <p>This is paragraph is {props.textLength} characters long.</p>
        </div>
    )
};

export default inputComponent;
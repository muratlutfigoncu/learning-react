import React from 'react';
//import Radium from 'radium';
//import styled from 'styled-components';

import classes from './person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        //<div className = "Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>  This is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        //</div>
    )
};

//export default Radium(person);
export default person;
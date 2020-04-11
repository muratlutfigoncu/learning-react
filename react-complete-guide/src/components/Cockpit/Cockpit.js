import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    const assignedClasses = [];

    let bntClass = '';

    if(props.showPersons){
        bntClass = classes.Red;
    }
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    
    return (
        <div className={classes.Cockpit}>
            <h1>Hi React!</h1>
            <p className={assignedClasses.join(' ')}>Apparently it works</p>
            <button 
                className={bntClass} 
                alt={props.showPersons} 
                onClick={props.clicked}>
                Switch!</button>
        </div>
    );
}

export default cockpit;
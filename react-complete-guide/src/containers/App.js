import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium'
//import styled from 'styled-components';
import Person from '../components/Persons/Person/person'
import Persons from '../components/Persons/Persons'
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  
  state = {
    persons: [
      { id:"1", name: 'Max', age: 28 },
      { id:"2", name: 'Manu', age: 29 },
      { id:"3", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render (){
  

    let persons = null;
    let bntClass = '';
    if(this.state.showPersons){
      persons = 
        <div>
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler}/>
        </div> ;
    }

    
    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;


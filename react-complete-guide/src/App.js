import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {
  
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }


  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }
  render (){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    }
    return (
      <div className="App">
        <h1>Hi React Appsasdas</h1>
        <p>Apparently it works</p>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler("Murats")}>Switch!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}/>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
      </div>
    );
  }
  ///return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi React Something'));
}

export default App;



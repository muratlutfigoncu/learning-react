import Validation from './Validation/Validation'
import React, { Component } from 'react';
import Input from './Input/Input'
import Char from './Char/Char'
import './App.css';

class App extends Component {

  state = {
    textLength: 0,
  }

  deleteCharHandler = (index) => {
    const chars = this.state.text.split('');
    chars.splice(index, 1)
    this.setState( { text: chars.join('') });
  }

  changeHandler = ( event) => {
    console.log(event.target.value);
    const textLength = event.target.value.length
    console.log(textLength);
    this.setState( {textLength: textLength, text: event.target.value });
  }
  render() {

    let characters = null
    if(this.state.text){
      characters = (
          <div>
            {this.state.text.split('').map((ch, index) => {
              return <Char
                  click={() => this.deleteCharHandler(index)}
                  text= {ch}/>
          
          })}
          </div>

        );
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <h1>Hi React!</h1>
        <p>Apparently it works</p>
        <Input 
          changed= {(event) => this.changeHandler(event)}
          textLength= {this.state.textLength}/>
        <Validation 
          textLength= {this.state.textLength}/>

        {characters}
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from './Char/Char';

class App extends Component {
  state ={input:''};
  chnageHandler=(event)=>{
    this.setState({input:event.target.value});
  }
  deleteHandler=(index)=>{
    let str = this.state.input.split('');
    str.splice(index,1);
    let updatedText =str.join('');
    this.setState({input:updatedText});
  }
  render() {
    const char =this.state.input.split('').map((p,idx)=><Char character={p} key={idx} delete={()=>this.deleteHandler(idx)}></Char>)

    return (
      <div className="App">
        <input type="text"onChange={this.chnageHandler} value={this.state.input}></input>
        <p>{this.state.input}</p>
        <Validation check={this.state.input.length}></Validation>
        {char}
      </div>
    );
  }
}

export default App;

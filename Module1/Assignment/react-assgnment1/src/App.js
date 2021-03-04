import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state ={
    UserName:"SumanManna"
  }
  nameChangeHandler=(event)=>{
    this.setState({
      UserName:event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangeHandler}></UserInput>
        <UserOutput username={this.state.UserName}></UserOutput>
      </div>
    );
  }
}

export default App;

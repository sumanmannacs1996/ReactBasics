import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state ={
    person:[
      {id:"dshshdsdg",name:"Suman Manna",age:25,other:"Hobbies Coding!!"},
      {id:"cnjjhn",name:"Pritam Sarkat",age:25,other:"Very Intelligent!!"},
      {id:"qyteyju",name:"Suchet Talikoti",age:25,other:"Hard working!!"}
    ],
    showPerson:true
  }

  nameSwitchHandler=(newName)=>{
    this.setState({
      person:[
        {name:newName,age:25},
        {name:"Pritam Sarkat",age:25},
        {name:"Suchet",age:25}
      ]
    });
  }
  nameChangeHandler=(event,id)=>{
    let index = this.state.person.findIndex((p)=>p.id === id);
    let obj = {...this.state.person[index]};
    obj.name = event.target.value;
    const persons =[...this.state.person];
    persons[index] = obj;
    this.setState({person:persons})
  }
  togglePersonHandler =()=>{
    this.setState({showPerson:!(this.state.showPerson)})
  }

  deletePersonHandler =(index)=>{
    let persons = this.state.person;
    persons.splice(index,1);
    this.setState({person:persons});
  }

  render() {
    let PersonsComponent =null;
    if(this.state.showPerson){

      PersonsComponent =(
       <Persons 
       persons ={this.state.person}
       clicked = {this.deletePersonHandler}
       changed = {this.nameChangeHandler}
       ></Persons>
      );
    }
    return (
      <div className={classes.App}>
       <Cockpit
       showPerson={this.state.showPerson}
       count={this.state.person.length}
       clicked ={this.togglePersonHandler}
       />
        {PersonsComponent}
        <button className={classes.Button}>Another Button</button>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement("h1",'null',"Hello World!!"));
  }
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

import WithClasses  from '../containers/hoc/WithClasses';

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js constructer ]");
  }
  state ={
    person:[
      {id:"dshshdsdg",name:"Suman Manna",age:25,other:"Hobbies Coding!!"},
      {id:"cnjjhn",name:"Pritam Sarkat",age:25,other:"Very Intelligent!!"},
      {id:"qyteyju",name:"Suchet Talikoti",age:25,other:"Hard working!!"},
      {id:"dejhfhg",name:"Megha Kumari",age:25,other:"Very Sweet!!"}
    ],
    showPerson:true,
    showCockpit:true,
    changedCounter:0
  }

  static getDerivedStateFromProps(props,state){
    console.log("[App.js] get DerivedStateFromProps",props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Ap.js] shuldComponentUpdate');
    return true;
  }
  componentDidUpdate(nextProps,nextState){
    console.log('[Ap.js] componentDidUpdate');
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
    this.setState((prevState,props)=>{
      return {
        person:persons,
        changedCounter: prevState.changedCounter + 1
      };
    });
    
  }
  togglePersonHandler =()=>{
    this.setState({showPerson:!(this.state.showPerson)})
  }

  deletePersonHandler =(index)=>{
    console.log("Index =",index);
    let persons =[...this.state.person];
    persons.splice(index,1);
    console.log(persons);
    this.setState({person:persons});
  }

  render() {
    console.log('[App.js] render');
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
      <WithClasses classes={classes.App}>
        <button onClick={()=>this.setState({showCockpit:false})}>Remove Cockpit</button>
        {this.state.showCockpit ===true ?
        <Cockpit
        title={this.props.appTitle}
        showPerson={this.state.showPerson}
        count={this.state.person.length}
        clicked ={this.togglePersonHandler}
        /> :
        null
        }
       
        {PersonsComponent}
        <button className={classes.Button}>Another Button</button>
      </WithClasses>
    );
    //return React.createElement('div',{className:'App'},React.createElement("h1",'null',"Hello World!!"));
  }
}

export default App;

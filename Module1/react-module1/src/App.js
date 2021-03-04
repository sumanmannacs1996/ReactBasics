import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

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
  nameChabgeHandler=(event,id)=>{
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
    const style={
      backgroundColor:"red",
      color:"white",
      font:"ingerit",
      border:"1px solid blue",
      padding:"8px",
      cursor:'pointer'
    };
    let persons =null;
    if(this.state.showPerson){

      persons =(
        this.state.person.map((p,idx)=><Person 
        key={p.id} name={p.name} age={p.age} 
        Changed ={(event)=>this.nameChabgeHandler(event,p.id)} 
        click ={this.deletePersonHandler.bind(this,idx)}
        >{p.other}
        </Person>)
      );
      style.backgroundColor="green";
    }
    const cssClass =[];
    if(this.state.person.length == 2)
      cssClass.push("lightred");
    if(this.state.person.length == 1)
    cssClass.push("red");
    return (
      <div className="App">
        <h1 className={cssClass.join(' ')}>Hi I am React App</h1>
        <button onClick={this.togglePersonHandler} style={style}>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement("h1",'null',"Hello World!!"));
  }
}

export default App;

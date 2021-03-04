import React from 'react';
import './Person.css';
const person =(props)=>{
    return <div className="Person">
            <p onClick={props.click}>I am {props.name} and I am {props.age} Years Old!</p>
            <input type='txt' onChange={props.Changed} value={props.name}></input>
            <p>{props.children}</p>
        </div>
};

export default person;
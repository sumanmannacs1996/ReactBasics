import React from "react";
import Person from './Person/Person';

const persons =(props)=>{
    return (
        props.persons.map((p,idx)=><Person
            key ={p.id}
            name ={p.name}
            age={p.age}
            change ={(event)=>props.changed(event,p.id)}
            click ={()=>props.clicked(idx)}
            children={p.other}
            ></Person>
            )
    );
}

export default persons;
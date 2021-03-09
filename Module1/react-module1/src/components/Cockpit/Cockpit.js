import React from 'react';
import classes from './Cockpit.css'

const cockpit =(props)=>{
    const cssClass =[];
    const buttonClass =[classes.Cockpit];
    if(props.showPerson){
        buttonClass.push(classes.green);
    }
    if(props.count === 2)
      cssClass.push(classes.lightred);
    if(props.count === 1)
    cssClass.push(classes.red);
    return(
        <div className ={classes.Cockpit}>
        <h1 className={cssClass.join(' ')}>Hi I am React App</h1>
        <button onClick={props.clicked} className={buttonClass.join(' ')}>Switch Name</button>
        </div>
    );
}

export default cockpit;
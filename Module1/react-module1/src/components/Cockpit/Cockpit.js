import React,{useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit =(props)=>{
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        //http request...
        setTimeout(()=>{
            alert("Saved data to cloud");
        },1000)
    },[props.persons])
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
        <h1 className={cssClass.join(' ')}>{props.title}</h1>
        <button onClick={props.clicked} className={buttonClass.join(' ')}>Switch Name</button>
        </div>
    );
}

export default React.memo(cockpit);
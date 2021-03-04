import React from 'react';

const userInput=(props)=>{
    return <div>
        <input type="txt" onChange={props.changed} value ={props.username}></input>
    </div>
}

export default userInput;
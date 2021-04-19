import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <button onClick={props.toggle}>Toggle</button>
            <span style={{color:props.data.complete?'green' : 'red'}}
            >{props.data.name}</span>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
}

import React from 'react'
import TaskIteam from './TaskIteam'
import classes from './Tasks.module.css';
export default function Tasks(props) {
    let taskList = <h2>No tasks found. Start adding some!</h2>
    if(props.tasks.length > 0){
        taskList = (
            <ul>
                {props.tasks.map(p=> <TaskIteam key ={p.id}>{p.text}</TaskIteam>)}
            </ul>
        )
    }
    if(props.error){
        taskList=<button conClick={props.onFetch}>Try Again</button>
    }
    if(props.loading){
        taskList='Loading Tasks...';
    }

    return <section className={classes.container}>{taskList}</section>
}

import React,{useRef} from 'react'
import styles from './TaskForm.module.css'
export default function TaskForm(props) {
    const taskInputRef=useRef();
    const submitHandler =(event)=>{
        event.preventDefault();
        const entiredValue = taskInputRef.current.value.trim();
        if(entiredValue !== ''){
            props.onEnteredTask(entiredValue);
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <input type='text' ref ={taskInputRef}></input>
            <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
        </form>
    );
}

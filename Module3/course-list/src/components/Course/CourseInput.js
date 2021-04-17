import React,{useState} from 'react';
import Button from '../UI/Button/Button'
import './CouseInput.css'
const CourseInput = (props)=>{
    const [entiredValue,setEnterdValue]=useState('');
    const nameChangeHandler =(event)=>{
        setEnterdValue(event.target.value);
    }
    const addCouseHandler=()=>{
        if(entiredValue.trim().length === 0){
            return;
        }
        props.add(entiredValue);
    }
    return(
        <form>
            <div className="form-control">
                <label>Course Name</label>
                <input type='text' onChange={nameChangeHandler}></input>
            </div>
            <Button type='button' click={addCouseHandler}>Add Course</Button>
        </form>
    );
}

export default CourseInput;
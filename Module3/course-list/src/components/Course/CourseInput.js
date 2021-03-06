import React,{useState} from 'react';
import Button from '../UI/Button/Button'
import styles from'./CouseInput.module.css'
const CourseInput = (props)=>{
    const [entiredValue,setEnterdValue]=useState('');
    const [isValid,setState] = useState(true);
    const nameChangeHandler =(event)=>{
        setEnterdValue(event.target.value);
        setState(true);
    }
    const addCouseHandler=()=>{
        if(entiredValue.trim().length === 0){
            setState(false);
            return;
        }
        props.add(entiredValue);
        setEnterdValue('');
    }
    return(
        <form>
            <div className={`${styles['form-control']} ${!isValid ? styles.invalid : ''}`}>
                <label>Course Name</label>
                <input type='text' onChange={nameChangeHandler} value ={entiredValue}></input>
            </div>
            <Button type='button' click={addCouseHandler}>Add Course</Button>
        </form>
    );
}

export default CourseInput;
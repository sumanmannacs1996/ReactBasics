import React,{useState} from 'react';
import Card from './../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
const AddUser=(props)=>{
    const [enteredUserName,setUserNme]=useState(
        {
            username:'',
            age:''
        }
    );
    const usernameChangeHandler=(event)=>{
        setUserNme((prev)=>{
            const newObj = {...prev};
            newObj.username=event.target.value
            return newObj;
        })
    }
    const ageChangeHandler=(event)=>{
        setUserNme((prev)=>{
            const newObj = {...prev,age:event.target.value};
            return newObj;
        })
    }
    const addUserHandler=()=>{
        if(enteredUserName.username.trim() ==='' || enteredUserName.age.trim() === ''){
            return;
        }
        console.log(enteredUserName);
        setUserNme({
            username:'',
            age:''
        })
    }
    return(
        <Card inputStyle ={styles.input}>
        <form>
            <label htmlFor='username'>Person Name</label>
            <input id='username' type='text' onChange={usernameChangeHandler} value={enteredUserName.username}></input>
            <label htmlFor='age'>Age(Years)</label>
            <input id='age' type='number'onChange={ageChangeHandler} value={enteredUserName.age}></input>
            <Button type ='button' onClick={addUserHandler}>Add User</Button>
        </form>
        </Card>
    );
}

export default AddUser;
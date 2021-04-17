import React,{useState} from 'react';
import Card from './../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
const AddUser=(props)=>{
    const [enteredUserName,setUserNme]=useState(
        {
            username:'',
            age:''
        }
    );
    const [errorState,setErrorState]= useState(false);
    const [errorDetails,setErrorDetails]= useState();
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
            setErrorState(true);
            setErrorDetails({
                title:'Invalid Input!!',
                message:'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        else if(+enteredUserName.age <=0){
            setErrorState(true);
            setErrorDetails({
                title:'Invalid Age!!',
                message:'Please enter a valid age (> 0).'
            })
            return;
        }
        props.addUser(enteredUserName);
        setUserNme({
            username:'',
            age:''
        })
    }
    const backDropHandler =()=>{
        setErrorState(false);
    }
    return(
        <div>
            {errorState ?
        <ErrorModal title={errorDetails.title} message={errorDetails.message} Okay={backDropHandler}></ErrorModal>
        : null
            }
        <Card newStyle ={styles.input}>
        <form>
            <label htmlFor='username'>Person Name</label>
            <input id='username' type='text' onChange={usernameChangeHandler} value={enteredUserName.username}></input>
            <label htmlFor='age'>Age(Years)</label>
            <input id='age' type='number'onChange={ageChangeHandler} value={enteredUserName.age}></input>
            <Button type ='button' onClick={addUserHandler}>Add User</Button>
        </form>
        </Card>
        </div>
    );
}

export default AddUser;
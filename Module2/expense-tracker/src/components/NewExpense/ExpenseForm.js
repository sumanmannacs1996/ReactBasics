import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm =(props)=>{

    const[userInput,setUserInput] =useState({
        title:'',
         amount:'',
         date:''
    });
    const titleChangeHadler =(event)=>{
        setUserInput((prevState)=>{
            return {...prevState,title:event.target.value};
        })
     //   console.log(userInput);
    }
    const amountChangeHadler =(event)=>{
        setUserInput((prevState)=>{
            return{...prevState,amount:event.target.value}
        })
     //   console.log(userInput);
    }
    const dateChangeHadler =(event)=>{
        setUserInput((prevState)=>{
            return{...prevState,date:event.target.value}
        })
     //   console.log(userInput);
    }

    const submitHandler =(event)=>{
        event.preventDefault();
        props.onSaveExpense(userInput);
        //console.log(userInput);
        setUserInput({
            title:'',
         amount:'',
         date:''
        })
    }

    return(
        <form>
            <div className='new-expense__controls'>
                <div className ='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHadler} value ={userInput.title}></input>
                </div>
                <div className ='new-expense__control'>
                    <label>Amount</label>
                    <input type ='number' min='0.01' step='0.01' onChange={amountChangeHadler} value={userInput.amount}></input>
                </div>
                <div className ='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2020-01-01' max='2025-12-31' onChange={dateChangeHadler} value={userInput.date}></input>
                </div>
            </div>
            <div className ='new-expense__actions'>
                <button type='submit' onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
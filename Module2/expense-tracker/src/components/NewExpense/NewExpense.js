import React,{useState} from  'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props)=>{
    const [isEditing,setEditing] =useState(false);
    const saveExpenseDataHandler=(data)=>{
        const ExpenseData ={
            ...data,
            id:Math.random().toString()
        }
        //console.log(ExpenseData);
        props.addExpense(ExpenseData);
        setEditing(false);
    }
    const openEditingHandler=()=>{
        setEditing(true);
    }
    const closeEditHandler=(data)=>{
        setEditing(data);
    }
    return(
        <form className ='new-expense'>
            {!isEditing && <button onClick={openEditingHandler}>Add New Expense</button>}
            {isEditing &&<ExpenseForm onSaveExpense ={saveExpenseDataHandler} onCancle ={closeEditHandler}></ExpenseForm>}
        </form>
    );
}

export default NewExpense;
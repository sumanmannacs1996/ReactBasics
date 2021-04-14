import React from  'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props)=>{
    const saveExpenseDataHandler=(data)=>{
        const ExpenseData ={
            ...data,
            id:Math.random().toString()
        }
        //console.log(ExpenseData);
        props.addExpense(ExpenseData);
    }
    return(
        <form className ='new-expense'>
            <ExpenseForm onSaveExpense ={saveExpenseDataHandler}></ExpenseForm>
        </form>
    );
}

export default NewExpense;
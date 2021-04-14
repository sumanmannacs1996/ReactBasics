import React from  'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props)=>{
    return(
        <form className ='new-expense'>
            <ExpenseForm></ExpenseForm>
        </form>
    );
}

export default NewExpense;
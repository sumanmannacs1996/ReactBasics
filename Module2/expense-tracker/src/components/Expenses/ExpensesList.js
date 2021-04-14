import React from 'react';
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList = (props)=>{
    const filteredList = props.itemList.filter((p)=>new Date(p.date).getFullYear().toString() === props.filter.filterdYear)
    if(filteredList.length ===0){
        return <h2 className='expenses-list__fallback'>No Expenses Found !!</h2>
    }
    return(
        <ul className='expenses-list'>
            {
                filteredList.map((p)=><ExpenseItem
                key={p.id}
                title={p.title}
                amount ={p.amount}
                date={p.date}
                ></ExpenseItem>)

            }
        </ul>
    );
}

export default ExpensesList;

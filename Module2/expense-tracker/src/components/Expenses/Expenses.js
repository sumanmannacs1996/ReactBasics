import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
const Expenses=(props)=>{
    const [filterData,changeFilterData] =useState({
        filterdYear:'2021'
    });
    const filterChangeHandler=(filterData)=>{
        //console.log(filterData);
        changeFilterData({
            filterdYear:filterData
        })
    }
    const filterExpenseDate = props.item.filter((p)=>new Date(p.date).getFullYear() == filterData.filterdYear)
    return (
        <div className='expenses'>
            <ExpenseFilter getSelectYear={filterChangeHandler} selected={filterData.filterdYear}></ExpenseFilter>
            {
                 filterExpenseDate.map((p)=><ExpenseItem
                 key={p.id}
                 title={p.title}
                 amount ={p.amount}
                 date={p.date}
                 ></ExpenseItem>)
            }
        </div>
        );  
}
export default Expenses;
import React,{useState} from 'react'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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
    const filteredList = props.item.filter((p)=>new Date(p.date).getFullYear().toString() === filterData.filterdYear);
    //console.log(filteredList);
    return (
        <div className='expenses'>
            <ExpenseFilter getSelectYear={filterChangeHandler} selected={filterData.filterdYear}></ExpenseFilter>
            <ExpensesChart expensesFilterdByYear={filteredList}></ExpensesChart>
            <ExpensesList filterData={filteredList}></ExpensesList>
        </div>
        );  
}
export default Expenses;
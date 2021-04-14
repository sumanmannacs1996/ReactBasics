import React,{useState} from 'react'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
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
    return (
        <div className='expenses'>
            <ExpenseFilter getSelectYear={filterChangeHandler} selected={filterData.filterdYear}></ExpenseFilter>
            <ExpensesList filter={filterData} itemList ={props.item}></ExpensesList>
        </div>
        );  
}
export default Expenses;
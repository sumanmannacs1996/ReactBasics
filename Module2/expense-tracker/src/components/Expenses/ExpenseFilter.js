import React from 'react';
import './ExpenseFilter.css'
const ExpenseFilter =(props)=>{
    const filterChangeHandler =(event)=>{
        //console.log(event.target.value);
        props.getSelectYear(event.target.value);
    }
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter By Year</label>
                <select onChange={filterChangeHandler} value ={props.selected}>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;
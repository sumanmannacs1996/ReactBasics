import React from 'react';
import Chart from '../Chart/Chart'

const ExpensesChart =(props)=>{
    const chartDataPoints =[
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"Mar",value:0},
        {label:"Apr",value:0},
        {label:"May",value:0},
        {label:"Jun",value:0},
        {label:"Jul",value:0},
        {label:"Aug",value:0},
        {label:"Sep",value:0},
        {label:"Oct",value:0},
        {label:"Nov",value:0},
        {label:"Dec",value:0},
    ];
    for(let data of props.expensesFilterdByYear){
        const month = new Date(data.date).getMonth();
        //console.log(month);
        chartDataPoints[month].value += (+data.amount);
    }
    //console.log(chartDataPoints);

    return(
        <div>
            <Chart dataPoint ={chartDataPoints}></Chart>
        </div>
    );
}

export default ExpensesChart;
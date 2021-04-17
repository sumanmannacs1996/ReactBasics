import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar'
const Chart =(props)=>{
    //console .log(props.dataPoint);
    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
    //console.log(totalMaximum);
    return(
        <div className='chart'>
        {
            props.dataPoint.map((p)=><ChartBar value={p.value} max={totalMaximum} label={p.label} key={p.label}></ChartBar>)
        }
    </div>
    )
    
}

export default Chart;
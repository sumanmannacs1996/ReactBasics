import React from 'react';
import './SingleCourse.css'
const SingleCourse =(props)=>{
    const deleteHandler=()=>{
        console.log(props.id);
        props.onDelete(props.id);
    }
    return(
    <li className='goal-item' onClick={deleteHandler}>
        <p>{props.data}</p>
    </li>
    )
}

export default SingleCourse;
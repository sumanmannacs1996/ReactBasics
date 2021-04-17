import React from 'react';
import SingleCourse from './SingleCourse';
import './CourseList.css'
const CourseList =(props)=>{
    return(
        <ul className='goal-list'>
            {
                props.items.map((p)=><SingleCourse data={p.text} key ={p.id} id ={p.id} onDelete={props.onDeleteItem}></SingleCourse>)
            }
        </ul>
    );
}

export default CourseList;
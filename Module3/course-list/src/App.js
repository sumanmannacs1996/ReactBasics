import React,{useState} from 'react';
import './App.css';
import CourseList from './components/Course/CourseList'
import CourseInput from './components/Course/CourseInput';
function App() {
  const [courses,setCourses] = useState([
    {text:'Do some work!',id:'t1'},
    {text:'Do some other work!',id:'t2'},
  ]);

  const addCouseHandler=(data)=>{
    setCourses((prevCourse)=>{
      const updatedOne =[...prevCourse,{ text: data, id: Math.random().toString() }];
      return updatedOne;
    })
}

const deleteHandler=(id)=>{
  setCourses((prevCourse)=>{
    const list = [...prevCourse];
    const listUpd = list.filter((p)=>p.id !== id);
    return listUpd;
  }) 
}
  return (
    <div className="App">
      <h1>From Suman</h1>
      <CourseInput add={addCouseHandler}></CourseInput>
    <CourseList items ={courses} onDeleteItem={deleteHandler}></CourseList>
    </div>
  );
}

export default App;

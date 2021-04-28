import React ,{useState,useEffect} from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks,setTasks] = useState([]);
  const taskAddHandler =(data)=>{
    setTasks((prevState)=>{
      return prevState.concat(data);
    })
  }

  const fetchTaskHandler= async()=>{
    setError(undefined);
    setIsLoading(true);
    try{
      const res = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/tasks.json');
      if(!res.ok){
        throw new Error('Request Failed :(');
      }
      const data = await res.json();
      const tasksList = [];
      for(const taskKey in data){
        tasksList.push({id:taskKey,text:data[taskKey].text});
      }
      setTasks(tasksList);
    }catch(error){
      setError(error.message || "Someting went wrong!");
    }
    setIsLoading(false);
  }
  useEffect(()=>{
    fetchTaskHandler();
  },[])

  return (
    <div className="App">
     <NewTask onAddTask={taskAddHandler}></NewTask>
     <Tasks error ={error} loading={isLoading} tasks ={tasks} onFetch={fetchTaskHandler}></Tasks>
    </div>
  );
}

export default App;

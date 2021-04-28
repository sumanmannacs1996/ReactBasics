import React,{useState} from 'react'
import TaskForm from './TaskForm'
export default function NewTask(props) {
    const [isLoading, setLoading] = useState(false);
    const [error,setError] = useState(undefined);
    
    const addTaskHandler=async (taskTxt)=>{
        setLoading(true);
        setError(undefined);
        try{
            const res = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/tasks.json',{
            method:'POST',
            body:JSON.stringify({text:taskTxt}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(!res.ok){
            throw new Error('Request Failed :(');
        }
        const data = await res.json();
        const generateId = data.name;
        const taskData = {id:generateId,text :taskTxt};
        props.onAddTask(taskData);
        }catch(error){
            setError(error.message || 'Something went wrong!');
        }
        setLoading(false);
    }

    return (
        <section>
            <TaskForm onEnteredTask={addTaskHandler} loading={isLoading} ></TaskForm>
            {error && <p>{error}</p>}
        </section>
    )
}

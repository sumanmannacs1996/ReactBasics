import React,{useState,useReducer} from 'react'
import './App.css';
import Todo from './Todo'
const ACTIONS ={
  ADD_TODO:'add-todo',
  TOGGLE_TODO:'toggle-todo',
  DELTE_TODO:'delete-todo'
}
const reducer=(todos,action)=>{
  switch(action.type){
    case ACTIONS.ADD_TODO:
      const newTodo={id:Date.now(),name:action.payload.name,complete:false}
      return[...todos,newTodo]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((p)=>{
        if(p.id === action.payload.id){
          return{...p,complete:!p.complete}
        }
        return p;
      });
    case ACTIONS.DELTE_TODO:
      return todos.filter((p)=>p.id !== action.payload.id); 
  }
}

function App() {
  const [todos,dispatch] = useReducer(reducer,[]);
  const [name,setName] =useState('')
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}});
    setName('');
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
      </form>
      {todos.map(p=><Todo key={p.id}
       data={p}
      toggle={()=>dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:p.id}})}
      delete={()=>dispatch({type:ACTIONS.DELTE_TODO,payload:{id:p.id}})}
      ></Todo>)}
    </div>
  );
}
export default App;

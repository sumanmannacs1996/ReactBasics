import React,{useState} from'react';
import './App.css';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'
function App() {
  const [users,setUsers]=useState([]);
  const addUserhandler=(data)=>{
    setUsers((prev)=>{
      const newData = [...prev,data];
      return newData;
    })
  }
  return (
    <div className="App">
      <p>Suman</p>
      <AddUser addUser={addUserhandler}></AddUser>
      <UserList listData={users}></UserList>
    </div>
  );
}

export default App;

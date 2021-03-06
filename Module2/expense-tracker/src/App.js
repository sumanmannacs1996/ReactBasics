import React,{useState,useEffect} from 'react';
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
/*const expense=[
  {
    id:'e1',
    title:'New Mobile',
    amount:10000,
    date:new Date(2020,3,15)
  },
  {
    id:'e2',
    title:'wrist watch',
    amount:8000,
    date:new Date(2021,4,17)
  },
  {
    id:'e3',
    title:'New Shirt',
    amount:2500,
    date:new Date(2021,6,12)
  },
  {
    id:'e4',
    title:'New Sunglasses',
    amount:5000,
    date:new Date(2021,9,23)
  },
  {
    id:'e5',
    title:'New Bike',
    amount:12000,
    date:new Date(2022,5,19)
  },
  {
    id:'e6',
    title:'New Shoes',
    amount:3500,
    date:new Date(2021,2,4)
  },
  {
    id:'e7',
    title:'New Car',
    amount:850040,
    date:new Date(2023,6,21)
  }
]; */

const sendDta =(data) =>{
  fetch('https://react-http-1e282-default-rtdb.firebaseio.com/expense.json',{
    method:"PUT",
    body:JSON.stringify(data)
  });
}

function App() {
  const [expensesList,updateExpenseList] = useState([]);
  const addExpenseHandler=(expenseData)=>{
    expenseData.amount = parseFloat(expenseData.amount);
    console.log(expenseData);
    updateExpenseList((prevState)=>{
      const updatedData = [expenseData,...prevState];
      sendDta(updatedData);
      return updatedData;
    });
  }

  useEffect(()=>{
    const fetchExpense = async ()=>{
      const  response = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/expense.json');
      const responseData = await response.json(response);
      updateExpenseList(responseData);
    }
    fetchExpense();
  },[updateExpenseList]);

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expensesList}></Expenses>
    </div>
  );
}

export default App;

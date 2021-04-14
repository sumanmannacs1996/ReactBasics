import React,{useState} from 'react';
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const expense=[
  {
    id:'e1',
    title:'New Mobile',
    amount:400,
    date:new Date(2020,3,15)
  },
  {
    id:'e2',
    title:'New Laptop',
    amount:800,
    date:new Date(2021,4,17)
  },
  {
    id:'e3',
    title:'New Bike',
    amount:1200,
    date:new Date(2022,5,19)
  },
  {
    id:'e4',
    title:'New House',
    amount:19999,
    date:new Date(2023,6,21)
  }
];
function App() {
  const [expensesList,updateExpenseList] = useState(expense);
  const addExpenseHandler=(expenseData)=>{
    //console.log(expenseData);
    updateExpenseList((prevState)=>{
      return[expenseData,...prevState]
    });
  }

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expensesList}></Expenses>
    </div>
  );
}

export default App;

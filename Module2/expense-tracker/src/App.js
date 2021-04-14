import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expense=[
    {
      id:'e1',
      title:'New Mobile',
      amount:400,
      date:new Date(2020,3,15)
    },
    {
      id:'e1',
      title:'New Laptop',
      amount:800,
      date:new Date(2020,4,17)
    },
    {
      id:'e2',
      title:'New Bike',
      amount:1200,
      date:new Date(2020,5,19)
    },
    {
      id:'e3',
      title:'New House',
      amount:19999,
      date:new Date(2020,6,21)
    }
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses item={expense}></Expenses>
    </div>
  );
}

export default App;

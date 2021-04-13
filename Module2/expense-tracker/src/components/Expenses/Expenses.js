import ExpenseItem from './ExpenseItem'
import './Expenses.css';
const Expenses=(props)=>{
    return (
        <div className='expenses'>
            {
                 props.item.map((p)=><ExpenseItem
                 title={p.title}
                 amount ={p.amount}
                 date={p.date}
                 key={p.id}
                 ></ExpenseItem>)
            }
        </div>
        );  
}
export default Expenses;
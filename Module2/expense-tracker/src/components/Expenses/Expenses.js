import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
const Expenses=(props)=>{
    const filterChangeHandler=(filterData)=>{
        console.log(filterData);
    }
    return (
        <div className='expenses'>
            <ExpenseFilter getSelectYear={filterChangeHandler}></ExpenseFilter>
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
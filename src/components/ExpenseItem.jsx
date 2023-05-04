import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props){

    
    
    return (
        <div className='expenseContainer'>
            <ExpenseDate date={props.date}/>
            <div className='expenseItem'>
                <h2>{props.title}</h2>
                <div className='expenseAmount'>₹{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
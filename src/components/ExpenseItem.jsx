import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem (props){

    
    
    return (
        <Card className='expenseContainer'>
            <ExpenseDate date={props.date}/>
            <div className='expenseItem'>
                <h2>{props.title}</h2>
                <div className='expenseAmount'>₹{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
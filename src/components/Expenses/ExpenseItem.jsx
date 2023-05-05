
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI Components/Card';

function ExpenseItem (props){

    return (
        <li>
            <Card className='expenseContainer'>
                <ExpenseDate date={props.date}/>
                <div className='expenseItem'>
                    <h2>{props.title}</h2>
                    <div className='expenseAmount'>₹{props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
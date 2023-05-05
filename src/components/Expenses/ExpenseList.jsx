import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';

function ExpenseList(props){

  if(props.expenses.length === 0){
    return <h2 className='expenselist'>No Expenses Found!</h2>
  }
  return <ul className='expenselist-default'>
    {props.expenses.map(expense => <ExpenseItem
      key={expense.id} 
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />)}
  </ul>
};

export default ExpenseList;
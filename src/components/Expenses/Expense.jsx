import React, { useState } from 'react';
import Card from '../UI Components/Card';
import './Expense.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expense(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const getYear = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }
    
  return (
        <Card className='expense'>

          <ExpensesFilter selected ={filteredYear} onFilterChange={getYear} />

          <ExpenseItem
            date={props.items[0].date}
            title={props.items[0].title}
            amount={props.items[0].amount}
         />
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}
        />
        </Card>
        
    )
}

export default Expense;
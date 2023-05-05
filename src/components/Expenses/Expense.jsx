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

          {props.items.map(expense => <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />)}

          
        </Card>
        
    )
}

export default Expense;
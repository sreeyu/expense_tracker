import React, { useState } from 'react';
import Card from '../UI Components/Card';
import './Expense.css';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';

function Expense(props) {

  const [filteredYear, setFilteredYear] = useState('2023');

  const getYear = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
    
  return (
        <Card className='expense'>

          <ExpensesFilter selected ={filteredYear} onFilterChange={getYear} />

          <ExpenseList expenses={filteredExpense} />

          
        </Card>
        
    )
}

export default Expense;
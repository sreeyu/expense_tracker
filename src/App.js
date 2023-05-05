import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import AddExpense from "./components/Expense Form/AddExpense";


const expenseArray = [
  {
    id: 'e1',
    title: 'Shopping',
    amount: 450,
    date: new Date(2023, 2, 8)
  },
  {
    id: 'e2',
    title: 'Food',
    amount: 100,
    date: new Date(2023, 0, 5)
  },
  {
    id: 'e3',
    title: 'Groceries',
    amount: 621,
    date: new Date(2022, 6, 15)
  },
  {
    id: 'e4',
    title: 'Books',
    amount: 399,
    date: new Date(2021, 5, 26)
  }
];

function App() {

  const [newExpenses, setNewExpenses] = useState(expenseArray)

  const getNewExpense = (newExpenseData) =>{
    setNewExpenses((prevExpense) =>{
      return [newExpenseData, ...prevExpense];
    })
  }
  
  return (
    <div className="App">
      <AddExpense onEnterExpense={getNewExpense} />
      <Expense items={newExpenses} />
    </div>
  );
}

export default App;

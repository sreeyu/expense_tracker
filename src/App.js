import ExpenseItem from "./components/ExpenseItem";

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
  
  return (
    <div className="App">
      <ExpenseItem 
      date={expenseArray[0].date} 
      title={expenseArray[0].title}
      amount={expenseArray[0].amount} 
      />
      <ExpenseItem 
      date={expenseArray[1].date} 
      title={expenseArray[1].title}
      amount={expenseArray[1].amount} 
      />
      <ExpenseItem 
      date={expenseArray[2].date} 
      title={expenseArray[2].title}
      amount={expenseArray[2].amount} 
      />
      <ExpenseItem 
      date={expenseArray[3].date} 
      title={expenseArray[3].title}
      amount={expenseArray[3].amount} 
      />
    </div>
  );
}

export default App;

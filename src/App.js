import Expense from "./components/Expense";

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
      <Expense items={expenseArray} />
    </div>
  );
}

export default App;

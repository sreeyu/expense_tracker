import './AddExpense.css'
import ExpenseForm from './ExpenseForm';

function AddExpense(props){

    const getExpenseData = (newExpenseData) =>{
        const addExpenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        };
        props.onEnterExpense(addExpenseData);
    }
    
    return <div className='add-expense'>
        <ExpenseForm onSaveExpense={getExpenseData}/>
    </div>
};

export default AddExpense;
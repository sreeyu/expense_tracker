import React, { useState } from 'react';
import './AddExpense.css'
import ExpenseForm from './ExpenseForm';

function AddExpense(props){

    const [isEditing, setIsEditing] = useState(false)

    const getExpenseData = (newExpenseData) =>{
        const addExpenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        };
        props.onEnterExpense(addExpenseData);
    }

    const getExpenseForm = () =>{
        setIsEditing(true);
    }

    const getExpenseButton = () =>{
        setIsEditing(false);
    }
    
    return (
    <div className='add-expense'>
        {!isEditing && (
            <button onClick={getExpenseForm}>Add Expenses</button>
        )}
        {isEditing && (
            <ExpenseForm onSaveExpense={getExpenseData} onCancel={getExpenseButton} />
        )}
    </div>);
};

export default AddExpense;
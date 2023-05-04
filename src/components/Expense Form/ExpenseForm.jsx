import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(){

    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const getTitle = (event) => {
        setEnterTitle(event.target.value);
    }

    const getAmount = (event) =>{
        setEnterAmount(event.target.value);
    }

    const getDate = (event) =>{
        setEnterDate(event.target.value);
    }

    const getSubmit = (event) =>{
        event.preventDefault();

        const expenseData ={
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };
        console.log(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };
    
    return <form onSubmit={getSubmit}>
        <div className="new-expense__container">
            
            <div className="new-expense">
                <label>Title</label>
                <input type="text" value={enterTitle} onChange={getTitle} />
            </div>

            <div className="new-expense">
                <label>Amount</label>
                <input type="number" min='1.0' value={enterAmount} onChange={getAmount} />
            </div>
            
            <div className="new-expense">
                <label>Date</label>
                <input type="date" value={enterDate} min='2020-01-01' max='2023-31-12' onChange={getDate} />
            </div>
        </div>

        <div className="new-expense__submit">
            <button type='submit'>Add Expense</button>
        </div>
        
    </form>
};

export default ExpenseForm
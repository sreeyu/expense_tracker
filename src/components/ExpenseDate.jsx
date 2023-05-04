import './ExpenseDate.css';

function ExpenseDate(props){

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className='dateContainer'>
              <div className='month'>{month}</div>
              <div className='date'>{day}</div>
              <div className='year'>{year}</div>
            </div>
    );
}

export default ExpenseDate;
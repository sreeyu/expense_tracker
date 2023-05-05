import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props){

    const amountValues = props.expensesArry.map(expense => expense.value);
    const totalMax = Math.max(...amountValues);
    

    return (
        <div className='chart'>
            {props.expensesArry.map((expense) => (
                <ChartBar 
                    key={expense.label}
                    value={expense.value}
                    maxValue={totalMax}
                    label={expense.label}
                />
            ))}
        </div>
    )
}

export default Chart;
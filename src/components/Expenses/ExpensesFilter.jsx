import './ExpensesFilter.css';

function ExpensesFilter (props){

    const getFilteredYear = (event) => {
        props.onFilterChange(event.target.value);
    }
    
    return <div className="filter">
        <div className="filter-container">
            <label>Filter by year</label>
            <select value={props.selected} onChange={getFilteredYear}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    </div>
};

export default ExpensesFilter;
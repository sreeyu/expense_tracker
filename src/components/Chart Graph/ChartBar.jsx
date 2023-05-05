import './ChartBar.css'

function ChartBar(props){

    let fillHeight = '0%';

    if(props.maxValue > 0){
        fillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    
    
    return (
        <div className='chart-container'>
            <div className="inner-chart">
                <div className="bar-fill" style={{height: fillHeight}}></div>
            </div>
            <div className="bar-label">{props.label}</div>
        </div>
    )
}

export default ChartBar;
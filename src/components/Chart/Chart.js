import React from "react";
import "./Chart.css"
import ChartBar from './ChartBar'

function Chart(props) {
    const valueArray = props.dataPoint.map(dataPoint => dataPoint.value)
    const Max = Math.max(...valueArray)
    return <div className={"chart"}>
        {props.dataPoint.map(dataPoint => <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={Max}
            label={dataPoint.label}/>)}
    </div>
}

export default Chart
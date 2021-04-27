import { PieChart } from 'react-minimal-pie-chart'
import { useState, useEffect } from 'react'

function Chart(props) {

    const [chartData, setChartData] = useState([])

    const values = props.values
    console.log(values)



    return (
        <div>
 
       
            <PieChart data={[{ title: 'Savings', value: parseInt(values.one), color: '#E38627' },
            { title: 'Rent', value: parseInt(values.two), color: '#C13C37' },
            { title: 'Waste', value: parseInt(values.three), color: '#6A2135' }]}/>

        </div>
    )
}

export default Chart

{/* <PieChart data={[{ title: 'Savings', value: parseInt(chartData.one), color: '#E38627' },
{ title: 'Rent', value: parseInt(chartData.two), color: '#C13C37' },
{ title: 'Waste', value: parseInt(chartData.three), color: '#6A2135' }]}/> */}
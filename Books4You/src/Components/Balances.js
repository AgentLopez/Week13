import { useState, useEffect } from 'react'


function Balances(props) {

    const [chartData, setChartData] = useState({})

useEffect(() => {
    console.log(chartData)
    props.onAdjust(chartData)
}, [chartData])

    const fixChart = (e) => {

        setChartData({
            ...chartData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Balances</h1>
            <input type="text" onChange={fixChart} placeholder='Savings' name='one'></input>
            <input type="text" onChange={fixChart} placeholder='Rent' name='two'></input>
            <input type="text" onChange={fixChart} placeholder='Wasted Money' name='three'></input>
        </div>
    )
}

export default Balances
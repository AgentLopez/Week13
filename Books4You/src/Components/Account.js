import Balances from "./Balances"
import Chart from "./Chart"

import { useState } from 'react'


function Account(props) {

    const[chartData, setChartData] = useState({})

const onAdjust = (values) => {
    console.log(values)
    setChartData(values)
}


    return (
        <div>
            <h1>Account</h1>
        
            <Balances onAdjust = {onAdjust}/>
            <Chart values = {chartData}/>
        </div>
    )
}

export default Account
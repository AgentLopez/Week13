

import React, { useState } from 'react'

function Stepper () {

const [counter, setCounter] = useState(0)

const goUp = () => {
    setCounter(counter + 1)
}

const goDown = () => {
    setCounter(counter - 1)
}

    return (
        <div>
<button onClick={goUp}>+</button><h4>{counter}</h4><button onClick={goDown}>-</button>

        </div>
    )
}


export default Stepper
import {useState} from 'react'
import {connect} from 'react-redux'

function Add (props) {

    const [number, setNumber] = useState(0)
    const [method, setMethod] = useState('+')

    const changing = (e) => {
        setNumber(parseInt(e.target.value))
    }

    const add = (value) => {

        props.onAdd(value)
    }

    const sub = (value) => {
        props.onSub(value)
    }

    const mathmethod = (method) => {
        setMethod(method)
    }

    const sendIt = (number, method) => {
        props.doMath(number, method)
    }


    return(
        <div className = "Getit">
            <h3>Add/Subtract Component</h3>
            <h3>Currently: <h1>{method}</h1></h3> 
            <input type="text" name="value" onChange={changing} />
        {/* <button onClick={() => add(number)}>ADD +</button>
        <button onClick={() => sub(number)}>SUB -</button> */}
        <h1><a href = '#' onClick={() => mathmethod('+')}> + </a>
        <a href = '#' onClick={() => mathmethod('-')}> - </a>
        <a href = '#' onClick={() => mathmethod('*')}> * </a>
        <a href = '#' onClick={() => mathmethod('/')}> / </a></h1>
        <button onClick={() => sendIt(number, method)}>Action!</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAdd: (value) => dispatch({type: 'ADD', value: value}),
        onSub: (value) => dispatch({type: 'SUB', value: value}),
        doMath: (number, method) => dispatch({type: 'MATH', value: number, method: method})
    }
}

export default connect(null, mapDispatchToProps)(Add)
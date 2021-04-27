import {connect} from 'react-redux'

import * as ActionCreators from '../action/actionCreators'

function Increments (props) {

const up = () => {
    props.onIncrement()
}

const down = () => {
    props.onDec()
}

    return (
        <div className = "Getit">
            <h3>Increments Component</h3>
            <button onClick={up}>+</button> <button onClick={down}>-</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrement: () => dispatch(ActionCreators.incrementCounter()),
        onDec: () => dispatch(ActionCreators.decrimentCounter())
    }
}



export default connect(null, mapDispatchToProps)(Increments)
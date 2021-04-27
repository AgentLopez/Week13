
import {connect} from 'react-redux'

function Counter(props) {

    const handle = () => {
        props.onIncrement()
    }

    return (
        <div>
             <h1>{props.ctr}</h1>
             <button onClick={handle}>Increment</button>
        </div>
       
    )
}
const mapStateToProps = (state) => {
    return {
        ctr: state.ctr
}

}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
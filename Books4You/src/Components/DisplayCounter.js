import {connect} from 'react-redux'

function DisplayCounter(props) {



    return(
        <div className = "Getit">
        <h3>Counter Display Component</h3>
        <h1>{props.ctr}</h1>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr,
        name: state.name
    }
}

export default connect(mapStateToProps)(DisplayCounter)
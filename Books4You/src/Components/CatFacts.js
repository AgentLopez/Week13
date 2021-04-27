import {connect} from 'react-redux'
import {useEffect} from 'react'
import * as actionCreators from '../action/actionCreators'

function CatFacts (props) {

useEffect(() => {
props.getFacts()
}, []) 

const meow = props.someCatFacts
const listOfFacts = meow.map((item) => {
    return (
        <li>{item.text}</li>
    )
}) 


    return (
        <div>
        <h1>Cat Facts</h1>
        <ul>
            {listOfFacts}
        </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFacts: () => dispatch(actionCreators.getCatFacts())

    }
}

const mapStateToProps = (state) => {
    return {
        someCatFacts: state.catR.catFacts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatFacts)
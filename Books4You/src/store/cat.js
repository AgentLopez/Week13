import * as actionTypes from '../action/actionTypes'
const initialState = {
    catFacts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FACTS:
            return {
                ...state,
                catFacts: action.payload
            }
        
            default:
                return state
        }




}

export default reducer
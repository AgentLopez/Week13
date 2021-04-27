import * as actionTypes from '../action/actionTypes'
const initialState = {
    fav: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAV:
            return {
                ...state,
                fav: state.fav.concat(action.payload)
            }
        case actionTypes.REMOVE_FAV:
            return {
                ...state,
                fav: state.fav.filter((item) => item.title !== action.payload)
            }
        default:
            return state
    }


}

export default reducer
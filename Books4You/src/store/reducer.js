
const initialState = {
    ctr: 0,
    name: 'John Doe',
    loggedIn: false,
    cart: [],
    fav: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            ctr: state.ctr + 1
        }
    }
    if (action.type === 'DECRIMENT') {
        return {
            ...state,
            ctr: state.ctr - 1
        }
    }
    if (action.type === 'ADD') {
        console.log(typeof(action.value))
        return {
            ...state,
            ctr: state.ctr + action.value
        }
    }
    if (action.type === "SUB") {
        return {
            ...state,
            ctr: state.ctr - action.value
        }
    }
    if (action.type === 'MATH') {
        if(action.method === '+') {
            return {
                ...state,
                ctr: state.ctr + action.value
        }}
        if(action.method === '-') {
            return {
                ...state,
                ctr: state.ctr - action.value
        }}
        if(action.method === '*') {
            return {
                ...state,
                ctr: state.ctr * action.value
        }}
        if(action.method === '/') {
            return {
                ...state,
                ctr: state.ctr / action.value
        }
        }
    }
    if (action.type === 'LOGIN') {
        return {
            ...state,
            loggedIn: true
        }
    }
    if (action.type === 'LOGOUT') {
        return {
            ...state,
            loggedIn: false
        }
    }

    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            ctr: state.ctr + 1,
            cart: state.cart.concat(action.payload)
        }
    }

    if (action.type === 'REMOVE_ITEM') {

        return {
            ...state,
            ctr: state.ctr -1,
            cart: state.cart.filter((item) => item.title !== action.payload)
        }
    }

    if (action.type === 'ADD_TO_FAV') {
        return {
            ...state,
            fav: state.fav.concat(action.payload)
        }
    }

    if (action.type === 'REMOVE_FAV') {

        return {
            ...state,
            fav: state.fav.filter((item) => item.title !== action.payload)
        }
    }
    
    
    return state
}

export default reducer
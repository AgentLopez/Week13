
import * as actionTypes from './actionTypes'

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrimentCounter = () => {
    return {
        type: actionTypes.DECRIMENT
    }
}

export const addToCart = (book) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: book
    }
}

export const addToFav = (book) => {
    return {
        type: actionTypes.ADD_TO_FAV,
        payload: book
    }
}

export const removeFav = (title) => {
    return {
        type: actionTypes.REMOVE_FAV,
        payload: title
    }
}

export const removeCartItem = (item) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const getCatFacts = () => {
    return (dispatch) => {
        fetch('https://cat-fact.herokuapp.com/facts')
        .then(response => response.json())
        .then(facts => {
            dispatch({type: actionTypes.GET_FACTS, payload: facts})
        })


    }
}
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import * as actionCreator from '../action/actionCreators'

function MyBooks(props) {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('jsonwebtoken')
        console.log(props.userId)

        fetch(`http://api.x2y1.org/my-books/${props.userId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(results => {
                setBooks(results)
            })
    }, [])


    const bookList = books.map((book) => {
        const editLink = `/EditBook/${book.id}`

        return <div className='oneBook' key={book.id}>
            <p>{book.title}</p>
            <p>{book.genre}</p>
            <p>{book.publisher}</p>
            <p>{book.year}</p>
            <p><img className='image' src={book.imageURL} alt={book.title} className='bookimage' /></p>


            {props.loggedIn ? <button onClick={() => { props.onAddCart(book) }}>Add to Cart</button> : null}
            {props.loggedIn ? <button onClick={() => { props.onAddFav(book) }}>Add to Favorite</button> : null}
            <br /><br />
            {props.loggedIn ? <NavLink to={editLink}>Edit This Book Listing</NavLink> : null}


        </div>
    })

    return (
        <div>
            <div className="books">
                {bookList}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.authR.userId,
        loggedIn: state.authR.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCart: (book) => dispatch(actionCreator.addToCart(book)),
        onAddFav: (book) => dispatch(actionCreator.addToFav(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)
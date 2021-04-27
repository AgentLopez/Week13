import { Component } from "react";
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import * as actionCreator from '../action/actionCreators'


class DisplayBooks extends Component {


    render() {

        const books = this.props.books
        
        const bookList = books.map((book) => {
            const editLink = `/EditBook/${book.id}`

            return <div className='oneBook' key={book.id}>
                <p>{book.title}</p>
                <p>{book.genre}</p>
                <p>{book.publisher}</p>
                <p>{book.year}</p>
                <p><img className='image' src={book.imageURL} alt={book.title} className='bookimage'/></p>
               
             
                {this.props.loggedIn ? <button onClick={() => {this.props.onAddCart(book)}}>Add to Cart</button> : null}
                {this.props.loggedIn ? <button onClick={() => {this.props.onAddFav(book)}}>Add to Favorite</button> : null}
<br /><br />
                {this.props.loggedIn ? <NavLink to = {editLink}>Edit This Book Listing</NavLink> : null}


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
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCart: (book) => dispatch(actionCreator.addToCart(book)),
        onAddFav: (book) => dispatch(actionCreator.addToFav(book))
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authR.loggedIn
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DisplayBooks)
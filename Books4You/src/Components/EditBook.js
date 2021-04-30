import { Component } from "react";




class EditBook extends Component {

    constructor() {
        super()
        this.state = {
            id: '',
            title: '',
            genre: '',
            publisher: '',
            year: '',
            imageURL: ''
        }
    }

    getBook = (BookId) => {
        fetch(`http://api.x2y1.org/books/${BookId}`)
    .then(response => response.json())
    .then(book => {
        console.log(book)
        this.setState({
            id: book.id,
            title: book.title,
            genre: book.genre,
            publisher: book.publisher,
            year: book.year,
            imageURL: book.imageURL
        })
    })
    }
    componentDidMount() {
        let BookId = this.props.match.params.BookId
        console.log(BookId)
        this.getBook(BookId)
    }

    handleChange = (e) => {
        console.log('push')
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
      
    clickyclick = () => {

        fetch(`http://api.x2y1.org/bookupdate/${this.id}`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imageURL: this.state.imageURL
            })
        }).then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.success) {
                console.log(this.props)
                this.props.history.push('/')
            }
        })
    }

    render() {
        
      

        return(
            <div>
                <h3>Editing Book</h3>
<input type="text" name="title" onChange= {this.handleChange} value={this.state.title} />
<input type="text" name="genre" onChange= {this.handleChange} value={this.state.genre} />
<input type="text" name="publisher" onChange= {this.handleChange} value={this.state.publisher} />
<input type="text" name="year" onChange= {this.handleChange} value={this.state.year} />
<input type="text" name="imageURL" onChange= {this.handleChange} value={this.state.imageURL} />
<button onClick={this.clickyclick}>Edit Book</button>
            </div>
        )
    }
}

export default EditBook
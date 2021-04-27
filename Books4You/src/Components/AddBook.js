import { Component } from "react";


class AddBook extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            genre: '',
            publisher: '',
            year: '',
            imageURL: ''
        }
    }

    clickyclick = () => {

        fetch('http://localhost:8000/books', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
   
    handleChange = (e) => {
        console.log('push')
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
<input type="text" name="title" onChange= {this.handleChange} placeholder="Book Title" />
<input type="text" name="genre" onChange= {this.handleChange} placeholder="Book Genre" />
<input type="text" name="publisher" onChange= {this.handleChange} placeholder="Book Publisher" />
<input type="text" name="year" onChange= {this.handleChange} placeholder="Book Year" />
<input type="text" name="imageURL" onChange= {this.handleChange} placeholder="Book ImageURL" />
<button onClick={this.clickyclick}>Add Book</button>
            </div>
        )
    }
}

export default AddBook
import { Component } from "react";
import axios from 'axios'


class AddBook extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            genre: '',
            publisher: '',
            year: '',
            imageURL: '',
            theFileFromServer: '',
            selectedFile: null
            
        }
    }

    clickyclick = () => {

        fetch('http://api.x2y1.org/books', {
            method: 'POST',
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
                if (result.success) {
                    console.log(this.props)
                    this.props.history.push('/')
                }
            })
    }

    handleChange = (e) => {
        console.log('push')
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    imageChoice = (e) => {
        this.setState({
            ...this.state,
            selectedFile: e.target.files[0]
        })
    }

    handleUpload = () => {
        const formData = new FormData()
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        )
        axios.post('http://api.x2y1.org/upload', formData)
            .then(file => {
                this.setState({
                    ...this.state,
                    theFileFromServer: file.data.file
                })
            })
    }

    render() {
        return (
            <div>
                <input type="text" name="title" onChange={this.handleChange} placeholder="Book Title" />
                <input type="text" name="genre" onChange={this.handleChange} placeholder="Book Genre" />
                <input type="text" name="publisher" onChange={this.handleChange} placeholder="Book Publisher" />
                <input type="text" name="year" onChange={this.handleChange} placeholder="Book Year" />
                <input type="text" name="imageURL" onChange={this.handleChange} placeholder="Book ImageURL" />
                <button onClick={this.clickyclick}>Add Book</button>
                <br />
                <br />
                <br />

                <input type="file" onChange={this.imageChoice} />
                <button onClick={this.handleUpload}>Upload</button>
<br />
<br />
                <img src={this.state.theFileFromServer} className='bookimage' />




            </div>
        )
    }
}

export default AddBook
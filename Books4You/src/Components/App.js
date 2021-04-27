
import '../App.css';
import { Component } from 'react';
import DisplayBooks from './DisplayBooks';

class App extends Component {
  

    constructor() {
      super()

      this.state = {
        books: []
      }
    }

    componentDidMount() {
      fetch('http://localhost:8000/books')
        .then(response => response.json())
        .then(results => {
          this.setState({
            books: results
          })
        })
    }

render() {
    return (
      <div className="App">
   
          <DisplayBooks books={this.state.books} />
       
    

      </div>
    );
  }
}

export default App;

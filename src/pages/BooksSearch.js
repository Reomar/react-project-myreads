import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI'
import Book from '../components/Book'

class BooksSearch extends Component{

  state = {
    userInput : '',
    books: []
  }

  handleChange = input => {
    this.setState({
      userInput: input
    })

    this.searchBooks(input)
  }

  // Get Data from The API
  searchBooks = (input) =>{
    const userInput = this.state.userInput

    if(input){
      search(input).then(res => {
        res.error ? this.setState({books: []}) : this.setState({books: res})
      })
    }

    if (input == 0) this.setState({books: []})
  }

  render(){
      return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value = {this.state.userInput}
                onChange = {(e) => this.handleChange(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                  { this.state.books.length > 0 &&
                    this.state.books.map(book => (
                      < Book book={book} />
                    ))
                  }
            </ol>
          </div>
        </div>
      )
  }
}

export default BooksSearch
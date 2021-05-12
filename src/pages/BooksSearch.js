import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import { search , update} from '../BooksAPI'
import Book from '../components/Book'

class BooksSearch extends Component{

  state = {
    userInput : '',
    books: []
  }

 /**
  * Update the input state and send the input to searchBooks()
  */
  handleChange = input => {
    this.setState({
      userInput: input
    })

    this.searchBooks(input)
  }

  /**
   * Get Books data and update the state with the retrieved data
   */
  searchBooks = (input) =>{

    if(input){
      search(input).then(res => {
        res.error ? this.setState({books: []}) : this.setState({books: res})
      })
    }

    if (input.length === 0) this.setState({books: []})
  }

  // Change Shelf in the Backend
  addToShelf = (book ) => {
    update(book, book.shelf)
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
                      < Book  key={book.id} book={book} onShelfChange={this.addToShelf} />
                    ))
                  }
            </ol>
          </div>
        </div>
      )
  }
}

export default BooksSearch
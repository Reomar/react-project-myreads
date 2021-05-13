import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import { search , update , getAll} from '../BooksAPI'
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
    // empty books state when there is no input
    input.length === 0 && this.setState({books: []})

    this.setState({
      userInput: input
    })

    input.length !== 0 && this.searchBooks(input)
  }

  /**
   * Get Books data and update the state with the retrieved data
   */
  searchBooks =  async (input) =>{
    const shelfBooks = await getAll()
    const searchResult = await search(input)

    if(searchResult.error){
      this.setState({books: []})
      return 0
    }

    this.setState({
      books: searchResult.map(b => ({...b, shelf:this.getShelfName(shelfBooks, b)}))
    })

  }

  getShelfName = (shelfBooks, currentBook) => {

    let shelfName
    
    shelfBooks.forEach(shelfBook => {
      if(shelfBook.id === currentBook.id){
        shelfName = shelfBook.shelf
      }
    });

    if(!shelfName) shelfName = 'none'

    return shelfName
  }


  // Change Shelf in the Backend
  changShelf = (book ) => {
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
                  { this.state.books.length > 0 && this.state.userInput &&
                    this.state.books.map(book => (
                      < Book  key={book.id} book={book} onShelfChange={this.changShelf} />
                    ))
                  }
            </ol>
          </div>
        </div>
      )
  }
}

export default BooksSearch
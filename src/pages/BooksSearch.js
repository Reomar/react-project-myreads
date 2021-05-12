import React , {Component} from 'react'
import { Link } from 'react-router-dom'

class BooksSearch extends Component{

  state = {
    userInput : ''
  }

  handleChange = input => {
    this.setState({
      userInput: input
    })
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
              
            </ol>
          </div>
        </div>
      )
  }
}

export default BooksSearch
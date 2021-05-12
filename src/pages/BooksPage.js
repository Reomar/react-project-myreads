import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from '../components/Book'
import { getAll, update } from '../BooksAPI'

class BooksPage extends Component {

    state = {
        books : []
    }

    // TODO==> get books Data from the backend
    componentDidMount(){
        getAll().then((res) => {
            this.setState({
                books: res
            })
        })
    }

    // Return books that matches the self key
    getShelfBooks = (shelfName) => this.state.books.filter(book => book.shelf == shelfName)

    // Change Book Shelf
    changeShelf = (book) => {
        // Update the backend
        update(book, book.shelf)
        book.shelf == 'none'
            ? this.setState((currentState) => ({
                books: currentState.books.filter((b) => b.id !== book.id)
            }))
            : this.setState(currentState => ({
                books : currentState.books.filter((b) => b.id !== book.id).concat(book)
            }))

        console.log(this.state.books)
    }

    render() {

        const shelves = [
            {
                id: 'currentlyReading',
                name: 'Currently Reading'
            },{
                id: 'wantToRead',
                name: 'Want to Read',
            },{
                id: 'read',
                name: 'Read'
            }
        ]


        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                        {shelves.map(shelf => (
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{shelf.name}</h2>

                                <div className="bookshelf-books">
                                    <ol className="books-grid">

                                        {this.getShelfBooks(shelf.id).map(book => (
                                            < Book book={book} onShelfChange={this.changeShelf}/>
                                        ))}

                                    </ol>
                                    </div>
                            </div>
                        ))}
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BooksPage;
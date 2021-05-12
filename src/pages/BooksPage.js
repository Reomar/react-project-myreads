import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from '../components/Book'

class BooksPage extends Component {

    /**
     * wantToRead
     * read
     * currentlyReading
     */
    state = {
        books : [
            {
            id: 'nggnmAEACAAJ',
            title: '1776',
            authors: ['David McCullough', 'omar'],
            imgURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
            shelf: 'wantToRead'
        },{
            id: '1283',
            title: 'Book 2',
            authors: ['Omar'],
            imgURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
            shelf: 'currentlyReading'
        },{
            id: 'ppsd',
            title: 'Book 3',
            authors: ['David McCullough'],
            imgURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
            shelf: 'wantToRead'
        },{
            id: 'nggnm12314AEACAAJ',
            title: 'Read',
            authors: ['David McCullough'],
            imgURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
            shelf: 'read'
        }
    ]
    }

    // TODO==> get books Data from the backend

    // Return books that matches the self key
    getShelfBooks = (shelfName) => this.state.books.filter(book => book.shelf == shelfName)

    // Change Book Shelf
    changeShelf = (book) => {
        // TODO=> Update the backend
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
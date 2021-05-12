import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Book}  from '../components/Book'

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
            authors: ['David McCullough'],
            imgURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
            shelf: 'wantToRead'
        },{
            id: '1283',
            title: 'Book 2',
            authors: ['Omar'],
            imgURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
            shelf: 'currentlyReading'
        },{
            id: 'nggnmAEACAAJ',
            title: 'Book 3',
            authors: ['David McCullough'],
            imgURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
            shelf: 'wantToRead'
        },{
            id: 'nggnmAEACAAJ',
            title: 'Read',
            authors: ['David McCullough'],
            imgURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
            shelf: 'read'
        }
    ]
    }

    getShelfBooks = (shelfNum) => this.state.books.filter(book => book.shelf == shelfNum)

    render() {
    return (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">

                            {this.getShelfBooks('currentlyReading').map(b => (
                                < Book book={b}/>
                            ))}

                        </ol>
                    </div>
                </div>


                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">

                            {this.getShelfBooks('wantToRead').map(b => (
                                < Book book={b}/>
                            ))}

                        </ol>
                    </div>
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">

                            {this.getShelfBooks('read').map(b => (
                                < Book book={b}/>
                            ))}

                        </ol>
                    </div>
                </div>


            </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>
    );
    }
}

export default BooksPage;
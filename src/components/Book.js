import { node } from 'prop-types'
import React, { Component } from 'react'
import BooksPage from '../pages/BooksPage'
import defaultBG from "../icons/noImg.png"


class Book extends Component{

    state = {
        shelf : ''
    }
    //Handle Shelf change
    handleChange = (e) => {
        const targetShelf = e.target.value
        console.log(targetShelf)
        const book = {
            ...this.props.book,
            shelf: targetShelf
        }

        this.props.onShelfChange(book)
    }

    render(){
        const book = this.props.book

        const image =  book.imageLinks ? book.imageLinks.thumbnail : defaultBG

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={this.handleChange}>
                                <option value="move" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors && book.authors.map(name =>(
                        <div className="book-authors">{name}</div>
                    ))}
                </div>
            </li>
        )
    }
}

export default Book
import React, { Component } from 'react'
import defaultBG from "../icons/noImg.png"
import ShelfChanger from './ShelfChanger'


class Book extends Component{

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
                            <ShelfChanger onShelfChange={this.props.onShelfChange} ShelfName={book.shelf} book={book}/>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors && book.authors.map(name =>(
                        <div key={Math.random()} className="book-authors">{name}</div>
                    ))}
                </div>
            </li>
        )
    }
}

export default Book
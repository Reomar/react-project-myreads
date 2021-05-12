import React from 'react'


function Book(props){

    const book = props.book
    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imgURL})`,
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select>
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
                {/* // TODO ==> Loop over the authors */}
                <div className="book-authors">{book.authors[0]}</div>
            </div>
        </li>
    )
}

export{ Book }
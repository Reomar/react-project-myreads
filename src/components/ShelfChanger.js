import React, { Component } from 'react'

class ShelfChanger extends Component{

    state = {
        shelf : ''
    }

    //Handle Shelf change
    handleChange = (e) => {
        const targetShelf = e.target.value
        this.setState({
            shelf: targetShelf
        })
        const book = {
            ...this.props.book,
            shelf: targetShelf
        }

        this.props.onShelfChange(book)
    }

    componentDidMount(){
        this.setState({
            shelf: this.props.ShelfName
        })
    }
    render(){
        return(
            <select value={this.state.shelf} onChange={this.handleChange}>
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
        )
    }
}

export default ShelfChanger
import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './components/BooksSearch'
import { Route } from 'react-router-dom'
import BooksPage from './pages/BooksPage'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        < Route path='/search'>
          < BooksSearch />
        </Route>
        < Route exact path='/'>
          < BooksPage />
        </Route>
      </div>
    )
  }
}

export default BooksApp

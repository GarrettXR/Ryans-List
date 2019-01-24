import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'
import '../styles/App.css'

import Categories from './Categories'
import Category from './Category'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Categories} />
            <Route path="/:slug" component={Category} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

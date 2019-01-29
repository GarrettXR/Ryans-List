import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import store from '../store'
import '../styles/App.css'

import Categories from './Categories'
import Category from './Category'
import Create from './Create'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/create/:slug"component={Create} />
            <Route path="/:slug" component={Category} />
            
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

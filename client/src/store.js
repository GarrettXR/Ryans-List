import { createStore, combineReducers } from 'redux'

import listingsReducer from './reducers/listingsReducer'
// import all reducers here

const rootReducer = combineReducers({
  listingsReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store